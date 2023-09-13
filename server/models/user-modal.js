const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
  email: {type: String, required: true, unique: true},
  username: {type: String, required: false, unique: true},
  password: {type: String, required: false},
  isActivated: {type: Boolean, default: false},
  activationLink: {type: String},
});

module.exports = model('User', UserSchema);
