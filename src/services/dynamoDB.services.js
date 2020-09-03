const AWS = require('aws-sdk');

let dynamo = null;
exports.connectToDynamo = () => {
  if (!dynamo) {
    const credentials = new AWS.SharedIniFileCredentials({ profile: 's3-bucket' });
    AWS.config.credentials = credentials;

    AWS.config.update({ region: 'ap-southest-1' });

    dynamo = new AWS.DynamoDB.DocumentClient();
    if (!dynamo) throw new Error('Failed to connect to dynamo');

    return dynamo;
  }
  return dynamo;
};

const { createItem } = require('../model/with_url.model');

const arg = {
  id: 'kontol',
  text: 'ehehehhee',
  url: 'trmp gay'
};

const res = createItem(arg);

console.log(res);
