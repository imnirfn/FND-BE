const modelUrl = require('../model/with_url.model');
const { connectToDynamo } = require('../services/dynamoDB.services');

const dynamo = connectToDynamo();

const TABLE_NAME = 'with_url';
const params = {
  TableName: TABLE_NAME
};
exports.getAll = async (req, res) => {
  // const response = await modelUrl.getAll();
  dynamo.scan(params, (err, data) => {
    if (err) throw new Error(err);
    res.json(data);
  });
  // console.log(response, 'resp in controller');
};
