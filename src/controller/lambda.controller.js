const { connectToLambda } = require('../services/lambda.services');

const lambda = connectToLambda();

exports.callFunction = async (req, res) => {
  const { body } = req;

  const params = {
    FunctionName: 'myscraper-dev-to_documents',
    Payload: JSON.stringify(body),
  };
  lambda.invoke(params, (err, data) => {
    if (err) res.status(500).json({ msg: err });

    res.json(data);
  });
};

exports.listAllFunctions = async (req, res) => {
  lambda.listFunctions((err, data) => {
    if (err) res.status(500).json({ msg: err });

    res.json(data);
  });
};

exports.getInstance = async (req, res) => {
  res.json(lambda);
};
