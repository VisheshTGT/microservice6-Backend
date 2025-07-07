const User = require('../models/User');
const jwt = require('jsonwebtoken');

function signToken(user) {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
}

exports.register = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    const token = signToken(user);
    res.status(201).json({ success: true, token });
  } catch (err) { next(err); }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    const token = signToken(user);
    res.json({ success: true, token });
  } catch (err) { next(err); }
};