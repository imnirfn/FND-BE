const { prediction } = require('../services/index.services');
const { connectToLambda } = require('../services/index.services');

const lambda = connectToLambda();
const { connectToAWS } = require('../services/s3.services');

const s3 = connectToAWS();
exports.triggerPrediction = prediction;

exports.with_document = async (req, res) => {
  res.json(req.files);
  // eslint-disable-next-line no-console
  console.log(req.files.filename);

  try {
    const uploadParams = {
      Bucket: 'textractpipelinestack-documentsbucket9ec9deb9-6xorotgm13n8',
      Key: req.files.filename.name,
      Body: req.files.filename.data
    };

    await s3.upload(uploadParams, (err, data) => {
      if (err) res.status(500).json({ error: err });
      res.json(data.Location);
    }).promise();
  } catch (err) {
    throw new Error(`S3 upload error: ${err.message}`);
  }

  // trigger lambda function to run prediction based on the S3
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
