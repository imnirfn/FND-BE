// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');

let lambda = null;

exports.connectToLambda = () => {
  if (!lambda) {
    const credentials = new AWS.SharedIniFileCredentials({ profile: 's3-bucket' });
    AWS.config.credentials = credentials;

    AWS.config.update({ region: 'ap-southeast-1' });

    // Create S3 service object
    lambda = new AWS.Lambda({ apiVersion: '2015-03-31' });
    if (!lambda) throw new Error('Failed to connect to lambda sdk');

    return lambda;
  }

  return lambda;
};
