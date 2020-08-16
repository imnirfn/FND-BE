const router = require('express').Router();

// Controller import
const test = require('./test');
const s3Api = require('./s3.api');

router.get('/', (req, res) => {
  res.json({
    message: 'API Route'
  });
});

router.use('/test', test);
router.use('/s3', s3Api);

module.exports = router;
