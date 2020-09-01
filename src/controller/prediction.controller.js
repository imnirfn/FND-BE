const { prediction } = require('../services/index.services');
const { connectToLambda } = require('../services/index.services');

// connect to lambda
const lambda = connectToLambda();
exports.triggerPrediction = prediction;

exports.with_document = async (req, res) => {

};

exports.with_text = async (req, res) => {

};

exports.with_url = async (req, res) => {
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
