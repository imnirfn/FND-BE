const modelUrl = require('../model/with_url.model');

exports.getAll = async (req, res) => {
  const response = modelUrl.getAll();
  res.json(response);
};
