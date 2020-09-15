const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../model/user.model');
const config = require('../config');
const { registerValidator, loginValidator } = require('../validator/user.validator');

const saltRounds = 10;

exports.register = async (req, res) => {
  // Validate input
  const { error } = registerValidator(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  // Check if email exists
  const isEmailExist = await User.findOne({ email: req.body.email });
  if (isEmailExist) {
    return res.status(400).json({
      error: 'Email already esits'
    });
  }

  // Hash the password
  // logic goes here
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hash
  });

  console.log(`New User: ${user}`);

  try {
    const saved = await user.save();
    res.json({
      error: null,
      data: saved
    });
  } catch (err) {
    res.status(400).json({ err });
  }
  return null;
};

exports.login = async (req, res) => {
  // Validate the user
  const { error } = loginValidator(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  // Check if email already exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ error: 'Email is wrong' });

  // Check password
  const checkPass = await bcrypt.compare(req.body.password, user.password);
  if (!checkPass) return res.status(400).json({ error: 'Password is wrong' });

  const token = jwt.sign(
    {
      name: user.name,
      id: user._id
    },
    config.tokenSecret
  );

  res.header('authorization', token).json({
    error: null,
    data: {
      token
    }
  });
  return null;
};

exports.test = async (req) => {
  console.log(req, 'inside this amazing function');
};
