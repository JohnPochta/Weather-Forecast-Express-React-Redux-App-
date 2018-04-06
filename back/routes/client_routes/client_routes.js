var express = require('express');
var router = express.Router();
var Users = require("../../DB/models/index.js");
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');
var jwt_security = function (req,res,next){
    jwt.verify(req.cookies.CH, process.env.key_, function(err, decoded) {
	  if (err) {
	  	console.log('WRONG');
	  	res.status(200).json({
            success:false,
            redirectUrl: '/'
        });
	  }
	  else{
	  	console.log('alright');
	  	req.decoded = decoded;
	  	next();
	  }
	})
}
router.use(jwt_security);
router.get('/citylist', function(req, res){
	Users.findOne( { _id : req.decoded.id } , function (err, user) {
		if(err){
		  	res.send(JSON.stringify({status : 'Wrong'}));
		}
		else{
			cities = user.cities;
			options = [];
			var i = 0;
			cities.forEach(function(elem){
				i++;
				options.push({key: i, value: elem, text: elem})
			});
			res.send(JSON.stringify({cities : options}));
		}
	});
});
router.post('/add_new_city', function (req, res){
	res.setHeader('Content-Type', 'application/json');
  	Users.find(	{ _id : req.decoded.id, cities: req.body.name },
  	function (err, not_err) {
  		if (err){
			res.send(JSON.stringify({status : 'Wrong'}));
  		}
		else if(!(not_err.length)){
		  	Users.findOneAndUpdate({ _id : req.decoded.id }, {"$push": { "cities": req.body.name }},
				{ "new": true, "upsert": true },
				function (err, user) {
				if(err){
				  	res.send(JSON.stringify({status : 'Wrong'}));
				}
				else{
					console.log(req.body.name);
					res.send(JSON.stringify({status : 'OK', context : req.body.name}));
				}
		    });
		}
		else{
			res.send(JSON.stringify({status : 'City already added', context : req.body.name}));
		}
    });
});


router.post('/delete_city', function (req, res){
	res.setHeader('Content-Type', 'application/json');
	Users.findOneAndUpdate({ _id : req.decoded.id }, 
	{"$pull": { "cities": req.body.name }}, { "new": true}, 
	function (err, user) {
		if(err){
		  	res.send(JSON.stringify({status : 'Wrong', context : req.body.name}));
		}
		else{
			res.send(JSON.stringify({status : 'OK', context : req.body.name}));
		}
    });
});

router.post('/logout', function(req, res) {
	res.clearCookie('CH'); 
	res.send(JSON.stringify({status : 'paka'}));
});

module.exports = router;