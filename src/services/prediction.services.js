const axios = require('axios');

exports.callModelEndpoint = (param) => axios.post('http://127.0.0.1:5000', param)
  .then((res) => res.data)
  .catch((err) => {
    throw err;
  });
