const axios = require('axios');

exports.predict = async (req, res) => {
  axios.post('http://127.0.0.1:5000', req.body)
    .then((response) => {
      console.log(response.data);
      return res.json(response.data);
    })
    .catch((err) => console.log(err));
};
