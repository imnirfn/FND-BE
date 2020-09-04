const modelUrl = require('../model/with_url.model');

exports.getAll = async (req, res) => {
  const response = await modelUrl.getAll();
  if (!response) throw new Error('Something is wrong');
  // console.log(response, 'resp in controller');
  res.json(response);
};
