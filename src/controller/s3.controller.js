const { connectToAWS } = require('../services/s3.services');

const s3 = connectToAWS();

exports.uploadDocument = async (req, res) => {
  res.json(req.files);
  // eslint-disable-next-line no-console
  console.log(req.files.filename);

  try {
    const uploadParams = {
      Bucket: 'tinggitecc',
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
};

exports.getAllBucket = async (req, res) => {
  // Call S3 to list the buckets
  s3.listBuckets((err, data) => {
    if (err) res.status(500).json({ error: err });

    res.json(data);
  });
};

exports.log = (req, res) => {
  res.json(s3);
};
