// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');

let s3 = null;
exports.connectToAWS = () => {
  if (!s3) {
    const credentials = new AWS.SharedIniFileCredentials({ profile: 's3-bucket' });
    AWS.config.credentials = credentials;

    AWS.config.update({ region: 'ap-southeast-1' });

    // Create S3 service object
    s3 = new AWS.S3({ apiVersion: '2006-03-01' });
    if (!s3) throw new Error('Failed to connect to s3');

    return s3;
  }

  return s3;
};
