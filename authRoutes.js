const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = { id: 1, username: 'testuser' }; 

  const token = jwt.sign(user, process.env.SECRET, { expiresIn: '1h' });

  res.json({ token });
});

module.exports = router;
