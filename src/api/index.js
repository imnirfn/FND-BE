const express = require('express');

const test = require('./test');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API Route'
  });
});

router.use('/test', test);

module.exports = router;
