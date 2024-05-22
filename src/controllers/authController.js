const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users = require('../models/userModel');

const SECRET_KEY = 'your_secret_key';

const login = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(401).json({ message: 'Authentication failed. User not found.' });
  }

  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err) throw err;

    if (isMatch) {
      const token = jwt.sign(
        { id: user.id, email: user.email },
        SECRET_KEY,
        { expiresIn: '1h' }
      );
      return res.status(200).json({ token });
    } else {
      return res.status(401).json({ message: 'Authentication failed. Wrong password.' });
    }
  });
};

module.exports = { login };
