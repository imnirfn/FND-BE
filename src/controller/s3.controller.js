const { connectToAWS } = require('../services/s3.services');

const s3 = connectToAWS();

exports.getAllBucket = async (req, res) => {
  // Call S3 to list the buckets
  s3.listBuckets((err, data) => {
    if (err) res.status(404).json({ error: err });

    res.json(data);
  });
};

exports.log = (req, res) => {
  res.json(s3);
};
