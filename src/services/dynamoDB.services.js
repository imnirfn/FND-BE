const dynamoose = require('dynamoose');
const AWS = require('aws-sdk');

exports.connectToDynamo = () => {
  const credentials = new AWS.SharedIniFileCredentials({ profile: 's3-bucket' });
  dynamoose.aws.sdk.config.update(credentials);
};
