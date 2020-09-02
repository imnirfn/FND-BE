const { callModelEndpoint } = require('../services/index.services');
const { connectToLambda } = require('../services/index.services');

// connect to lambda
const lambda = connectToLambda();

exports.with_document = async (req, res) => {

};

exports.with_text = async (req, res) => {
  try {
    const modelResponse = callModelEndpoint(req.body);

    console.log('Response from model endpoint', modelResponse);
    return res.json({ modelResponse });
  } catch (err) {
    console.log('Error', err);
    return res.status(500).json({ msg: err });
  }
};

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

    const article = data.Payload;
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
