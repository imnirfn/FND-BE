const { callModelEndpoint } = require('../services/index.services');
const { connectToLambda } = require('../services/index.services');

const lambda = connectToLambda();
const { connectToAWS } = require('../services/s3.services');

const s3 = connectToAWS();

/**
 * Prediction using document
 */
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

/**
 * Prediction using text
 */
exports.with_text = async (req, res) => {
  try {
    const modelResponse = await callModelEndpoint(req.body);

    console.log('Response from model endpoint', modelResponse);
    return res.json({ data: modelResponse });
  } catch (err) {
    console.log('Error', err);
    return res.status(500).json({ msg: err });
  }
};

/**
 * Prediction using URL
 */
exports.with_url = async (req, res) => {
  const { body } = req;
  console.log('Request to with_url: ', body);

  const params = {
    FunctionName: 'myscraper-dev-to_documents',
    Payload: JSON.stringify(body),
  };

  lambda.invoke(params, (err, data) => {
    if (err) {
      console.log('Error in lambda invocation', err);
      return res.status(500).json({ msg: err });
    }

    let article = data.Payload;

    if (article.includes('errorMessage')) {
      console.log('Error fetching news in text form');
      article = JSON.parse(article);
      return res.status(500).json({ msg: `Error fetching news in text form: ${article.errorMessage}` });
    }

    const param = { data: { article } };
    console.log(param);

    callModelEndpoint(param)
      .then((response) => {
        console.log(response);
        return res.json({ data: response });
      }).catch((error) => {
        console.log(error);
        return res.status(500).json({ msg: error });
      });
  });
};
