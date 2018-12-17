const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/users/new', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'new.html'));
});

module.exports = router;