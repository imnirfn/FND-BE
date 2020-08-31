const { connectToLambda } = require('./lambda.services');
const { connectToAWS } = require('./s3.services');
const { predict } = require('./prediction.services');

exports.connectToAWS = connectToAWS;
exports.connectToLambda = connectToLambda;
exports.prediction = predict;
