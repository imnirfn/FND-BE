const router = require('express').Router();
const s3Controller = require('../controller/s3.controller');

router.get('/buckets', s3Controller.getAllBucket)
  .get('/log', s3Controller.log)
  .post('/uploadDocument', s3Controller.uploadDocument);

module.exports = router;
