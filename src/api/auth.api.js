const router = require('express').Router();

// Controller import
const authController = require('../controller/auth.controller');

router.post('/register', authController.register)
  .post('/login', authController.login)
  .get('/test', authController.test);

module.exports = router;
