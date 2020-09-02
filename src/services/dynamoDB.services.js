const dynamoose = require('dynamoose');
const AWS = require('aws-sdk');

exports.connectToDynamo = () => {
  const credentials = new AWS.SharedIniFileCredentials({ profile: 's3-bucket' });
  dynamoose.aws.sdk.config.update(credentials);
  dynamoose.aws.sdk.config.update({ region: 'ap-southest-1' });
};

const urlModel = require('../model/with_url.model');

this.connectToDynamo();
const urlParam = {
  id: 'heuehueh',
  url: 'trumpisgay.com',
  text: 'trump shove french toast in his ass',
  prediction: 0.00,
  checked: true,
  label: true
};

urlModel.create(urlParam, (urlError, urlData) => {
  console.log('reached here');
  if (urlError) console.log(urlError);
  console.log(urlData);
});
