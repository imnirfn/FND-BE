const axios = require('axios');

const BASE_URL = 'http://ec2-54-169-217-226.ap-southeast-1.compute.amazonaws.com:5000';
exports.callModelEndpoint = (param) => axios.post(BASE_URL, param)
  .then((res) => res.data)
  .catch((err) => {
    throw err;
  });
