const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 225
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 40
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 225
  },
  date_registered: {
    type: Date,
    default: Date.now
  },
  deleted: {
    type: Date
  },
  roles: {
    type: String,
    required: true
  },
});

exports.userTransformer = (user) => {
  const formatted = {
    id: user._id,
    name: user.name,
    email: user.email,
    roles: user.roles
  };

  return formatted;
};

exports.User = mongoose.model('User', userSchema);
