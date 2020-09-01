const router = require('express').Router();
const lambdaControler = require('../controller/lambda.controller.js');

router.get('/listFunction', lambdaControler.listAllFunctions)
  .get('/getInstance', lambdaControler.getInstance)
  .post('/scrape-to-document', lambdaControler.invokeToDocument)
  .post('/test', lambdaControler.uploadDocument);

module.exports = router;
