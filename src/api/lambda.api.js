const router = require('express').Router();
const lambdaControler = require('../controller/lambda.controller.js');

router.get('/listFunction', lambdaControler.listAllFunctions)
  .get('/getInstance', lambdaControler.getInstance)
  .get('/invoke', lambdaControler.callFunction);

module.exports = router;
