const router = require('express').Router();
const s3Controller = require('../controller/s3.controller');

router.get('/bucket', s3Controller.getAllBucket);

module.exports = router;
