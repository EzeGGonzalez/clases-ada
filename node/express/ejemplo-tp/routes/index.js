const express = require('express');
const path = require('path');
const router = express.Router();

const users = [
  { id: 1, name: 'Ada', surname: 'Lovelace' },
  { id: 2, name: 'Grace', surname: 'Hopper' }
];

router.get('/users/new', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'new.html'));
});

router.get('/api/users', (req, res) => {
  res.json(users)
});

module.exports = router;