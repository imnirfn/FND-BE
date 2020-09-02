const { connectToLambda } = require('./lambda.services');
const { connectToAWS } = require('./s3.services');
const { callModelEndpoint } = require('./prediction.services');

exports.connectToAWS = connectToAWS;
exports.connectToLambda = connectToLambda;
exports.callModelEndpoint = callModelEndpoint;
