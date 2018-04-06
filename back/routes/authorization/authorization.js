var express = require('express');
var router = express.Router();
var CryptoJS = require("crypto-js");
var Users = require("../../DB/models/index.js");
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');

router.post('/', function(req, res) {
	console.log('here');
	res.setHeader('Content-Type', 'application/json');
	var cookie;
	//var fs = require('fs');
	//var obj = JSON.parse(fs.readFileSync('city.list.json', 'utf8'));
	Users.findOne( {email : req.body.email} , function (err, user) {
		if(err){
		  	return console.log(err);
		};
		if (user){
	  		let status;
	  		var key = process.env.key;
	  		let hashing_request_password = CryptoJS.HmacSHA256(req.body.password, key).words.join('');
	  		if (hashing_request_password===user.password){
	  			let key_ = process.env.key_;
	  			let token = jwt.sign({id : user._id}, key_);
	  			res.cookie('CH', token, { maxAge: 10000000, httpOnly: true });
	  			status = {status : 'OK'};
	  		}
	  		else{
	  			status = {status : 'Wrong'};
	  		}
	  		res.send(JSON.stringify(status));
	  	}
	  	else{
	  		res.send(JSON.stringify({status : 'Wrong'}));
	  	}
	});
}
);

module.exports = router;