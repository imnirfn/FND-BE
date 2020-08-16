const { connectToAWS } = require('../services/s3.services');

const s3 = connectToAWS;

exports.getAllBucket = async (req, res) => {
  // Call S3 to list the buckets
  s3.listBuckets((err, data) => {
    if (err) console.log(err);

    console.log(data);
  });
};
