const router = require('express').Router();

// Controller import
const factCheckController = require('../controller/fakeCheck.controller');

router.post('/', factCheckController.insertData)
  .get('/', factCheckController.getAll)
  .get('/:id', factCheckController.getById);
module.exports = router;
