const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(['Test', '1', '2']);
});

module.exports = router;
