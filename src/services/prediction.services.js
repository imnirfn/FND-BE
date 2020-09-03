const axios = require('axios');

const BASE_URL = 'http://localhost:5000';
exports.callModelEndpoint = (param) => axios.post(BASE_URL, param)
  .then((res) => res.data)
  .catch((err) => {
    throw err;
  });
