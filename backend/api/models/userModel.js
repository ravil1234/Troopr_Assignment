'use strict';
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
  firstName: {type:String,required:[true,"can't be blank"]},
  lastName: {type:String,required:[true,"can't be blank"]},
  email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
  bio: {type:String,required:[true,"can't be blank"]},
}, {timestamps: true});

UserSchema.plugin(uniqueValidator, {message: 'Already Registered!'});

mongoose.model('User', UserSchema);