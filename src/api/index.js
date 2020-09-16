const router = require('express').Router();

const verifyToken = require('../services/validateToken');

// Controller import
const test = require('./test');
const s3Api = require('./s3.api');
const lambdaApi = require('./lambda.api');
const predictApi = require('./prediction.api');
const dynamoApi = require('./dynamo.api');
const auth = require('./auth.api');
const factCheck = require('./factCheck.api');

router.get('/', (req, res) => {
  res.json({
    message: 'API Route'
  });
});

router.use('/test', verifyToken, test);
router.use('/s3', verifyToken, s3Api);
router.use('/lambda', verifyToken, lambdaApi);
router.use('/predict', predictApi);
router.use('/dynamo', verifyToken, dynamoApi);
router.use('/auth', auth);
router.use('/fectChecked', verifyToken, factCheck);

module.exports = router;
