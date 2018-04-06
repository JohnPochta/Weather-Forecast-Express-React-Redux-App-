var express = require('express');
var router = express.Router();
var CryptoJS = require("crypto-js");
var Users = require("../../DB/models/index.js");

router.post('/', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	key = process.env.key;//pulling up the key for hashing passwords
	//запрос к БД для регистрации нового пользователя начинается с проверки, 
	//существует ли пользователь с таким ключем
	//в данном случае ключ - email и login
	Users.find({$or: [{login: req.body.login}, {email : req.body.email}]}, function(err, users){
	   	if(err){
		  	return console.log(err);
		};
	  	if (users.length){
	  		//this branch sending a response, which says : change login or email!
	  		let status;
	  		users.forEach(function (elem) {
	  			if (elem.email === req.body.email){
	  				//i prefer send a short, but undersatdable responces=)
	  				status = {status : 'ALREADY EMAIL'};
	  			}
	  			else{
	  				//i prefer send a short, but undersatdable responces=)
	  				status = {status : 'ALREADY LOGIN'};
	  			}
	  		});
	  		res.send(JSON.stringify(status));
	  	}
	  	else{
	  		//this branch append new user to DB
			var new_user = new Users(
				{
					login : req.body.login,
					password: CryptoJS.HmacSHA256(req.body.password, key).words.join(''),
					email : req.body.email,
					cities : []
				}
			);
			new_user.save();
			res.send(JSON.stringify({status : 'OK'}));
	  	}
	});;
});
module.exports = router;