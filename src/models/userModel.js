// src/models/userModel.js
const bcrypt = require('bcryptjs');

const saltRounds = 10;
const plainPassword = 'password123';

// Synchronously hash the password before storing it in the user model
const hashedPassword = bcrypt.hashSync(plainPassword, saltRounds);

const users = [
  {
    id: 1,
    email: 'user@example.com',
    password: hashedPassword, // store the hashed password
  },
];

module.exports = users;
