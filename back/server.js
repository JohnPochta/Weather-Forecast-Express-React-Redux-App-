var express = require('express');
var mongoose = require('mongoose');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var urls = require('./routes/urls.js');
require('dotenv').config()
app.use(express.static('static'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/', urls); 


'mongodb://localhost:27017/mydb'
mongoose.connect(process.env.DB);
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() { 
  app.listen(process.env.PORT, function () {
    console.log('API app started');
  });
});
