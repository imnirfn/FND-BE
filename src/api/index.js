const router = require('express').Router();

// Controller import
const test = require('./test');
const s3Api = require('./s3.api');
const lambdaApi = require('./lambda.api');

router.get('/', (req, res) => {
  res.json({
    message: 'API Route'
  });
});

router.use('/test', test);
router.use('/s3', s3Api);
router.use('/lambda', lambdaApi);

module.exports = router;
