'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');
exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.create_a_user = function(req, res) {
  const newuser = new User(req.body);
  newuser.save(function(err, user) {
    if (err) 
      res.send(err);
    else
    res.json(user);
  });
};

exports.get_a_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err) {
      res.send(err);
    }
    else{
      res.json(user);
    }
    
  });
};

exports.update_a_user = function(req, res) {
  User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, function(err, user) {
    if (err) {
      res.send(err);
    }
    else{
      res.json(user);
    }
  });
};

exports.delete_a_user = function(req, res) {
  User.remove(
    {
      _id: req.params.userId
    },
    function(err, user) {
      if (err) {
        res.send(err);
      }
      else{
        res.json({message:"User deleted succesfully!"});
      }
    }
  );
};
