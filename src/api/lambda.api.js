const router = require('express').Router();
const lambdaControler = require('../controller/lambda.controller.js');

router.get('/listFunction', lambdaControler.listAllFunctions)
  .get('/getInstance', lambdaControler.getInstance)
  .get('/scrape-to-document', lambdaControler.callFunction)
  .post('/test', lambdaControler.uploadDocument);

module.exports = router;
