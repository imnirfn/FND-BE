const router = require('express').Router();

// Controller import
const test = require('./test');
const s3Api = require('./s3.api');
const lambdaApi = require('./lambda.api');
const predictApi = require('./prediction.api');

router.get('/', (req, res) => {
  res.json({
    message: 'API Route'
  });
});

router.use('/test', test);
router.use('/s3', s3Api);
router.use('/lambda', lambdaApi);
router.use('/predict', predictApi);
module.exports = router;
