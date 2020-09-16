const { connectToDynamo } = require('../services/dynamoDB.services');

const dynamo = connectToDynamo();

const TABLE_NAME = 'with_url';
const params = {
  TableName: TABLE_NAME
};

exports.createItem = (arg) => {
  params.Item = arg;
  console.log(params, 'The paramater sent to dynamo');
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

exports.getAll = async () => {
  await dynamo.scan(params, (err, data) => {
    if (err) throw new Error(err);
    return data;
  }).promise();
};

exports.deleteItem = dynamo (arg) => {
  params.Key = {
    url: arg.url
  };

  await dynamo.deleteItem(params, (err, data) => {
    if (err) console.log(err)
    return data
  }) 

  return
};
