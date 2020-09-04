const modelUrl = require('../model/with_url.model');
const { connectToDynamo } = require('../services/dynamoDB.services');

const dynamo = connectToDynamo();

exports.getAll = async (req, res) => {
  // const response = await modelUrl.getAll();
  await dynamo.scan(params, (err, data) => {
    if (err) throw new Error(err);
    res.json(data);
  }).promise();
  // console.log(response, 'resp in controller');
};
