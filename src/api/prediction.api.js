const router = require('express').Router();
const predictionController = require('../controller/prediction.controller');

router
  .post('/with_document', predictionController.with_document)
  .post('/with_url', predictionController.with_url)
  .post('/with_text', predictionController.with_text);

module.exports = router;
