const router = require('express').Router();
const predictionController = require('../controller/prediction.controller');

router.post('/predict', predictionController.triggerPrediction);
