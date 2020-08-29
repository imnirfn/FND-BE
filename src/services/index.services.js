const { connectToLambda } = require('./lambda.services');
const { connectToAWS } = require('./s3.services');

exports.connectToAWS = connectToAWS;
exports.connectToLambda = connectToLambda;
