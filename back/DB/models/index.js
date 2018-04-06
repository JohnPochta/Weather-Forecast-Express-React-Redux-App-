//in this file, we just creating a data scheme and exporting it
var mongoose = require('mongoose');
var NewUserSchema = mongoose.Schema({
  login: String,
  password: String,
  email : String,
  date : { type: Date, default: Date.now },
  cities : [String]
});
var Users = mongoose.model('TestUsers', NewUserSchema);

module.exports = Users;