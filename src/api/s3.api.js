const router = require('express').Router();
const s3Controller = require('../controller/s3.controller');

router.get('/buckets', s3Controller.getAllBucket)
  .get('/log', s3Controller.log);

module.exports = router;
