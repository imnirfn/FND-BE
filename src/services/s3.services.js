// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');

const connectToAWS = () => {
  const credentials = new AWS.SharedIniFileCredentials({ profile: 's3-bucket' });
  AWS.config.credentials = credentials;

  AWS.config.update({ region: 'ap-southeast-1' });

  // Create S3 service object
  const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
  if (!s3) throw new Error('Failed to connect to s3');

  // Call S3 to list the buckets
  s3.listBuckets((err, data) => {
    if (err) throw new Error('Failed to list bucket', err);

    console.log('Success', data.Buckets);
  });
};

exports.Connection = connectToAWS;
