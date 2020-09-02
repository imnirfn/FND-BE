const AWS = require('aws-sdk');

const doClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'with_url';
const params = {
  TableName: TABLE_NAME
};

exports.createItem = (arg) => {
  params.Item = arg;

  doClient.put(params, (err, res) => {
    if (err) throw new Error(err);

    console.log(res);
    return res;
  });
};

exports.readItem = (arg) => {
  params.Key = arg;
};
