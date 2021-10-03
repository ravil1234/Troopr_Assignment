const mongoose = require('mongoose');
module.exports=function(){
const User = require('../api/models/userModel');
mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://127.0.0.1:27017/trooper', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(err => {
    console.log('Unable to connect', err);
  });
}