const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(['Test dev', '1', '2']);
});

module.exports = router;
