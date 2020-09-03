const { connectToDynamo } = require('../services/dynamoDB.services');

const dynamo = connectToDynamo();

const TABLE_NAME = 'with_url';
const params = {
  TableName: TABLE_NAME
};

exports.createItem = (arg) => {
  params.Item = arg;
  console.log(dynamo);
  console.log(params);
  dynamo.put(params, (err, res) => {
    if (err) throw new Error(err);

    console.log(res, 'response from the put');
    return res;
  });
};

exports.readItem = (arg) => {
  params.Key = arg;

  dynamo.get(params, (err, res) => {
    if (err) throw new Error(err);
    console.log(res, 'response from the get');
    return res;
  });
};
