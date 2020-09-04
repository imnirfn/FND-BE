const router = require('express').Router();
const dynamoController = require('../controller/dynamo.controller');

router
  .get('/url-model', dynamoController.getAll);

module.exports = router;
