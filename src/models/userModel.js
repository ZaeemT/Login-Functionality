const bcrypt = require('bcryptjs');

const saltRounds = 10;
const plainPassword = 'password123';

// hashing the password 
const hashedPassword = bcrypt.hashSync(plainPassword, saltRounds);

const users = [
  {
    id: 1,
    email: 'user@example.com',
    password: hashedPassword, 
  },
];

module.exports = users;
