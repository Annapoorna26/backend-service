//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
  userName: String,
  userId: String,
  userEmail:String,
  password: String
});

const userModel = mongoose.model('user', userSchema );

module.exports = userModel;