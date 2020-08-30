const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(['Test dev', '1', '2']);
});

router.post('/prediction', (req, res) => {
	axios.post('http://127.0.0.1:5000', req.body)
		.then(response => {
			console.log(response.data)
			return res.json(response.data)
		})
		.catch(err => console.log(err));
});

module.exports = router;
