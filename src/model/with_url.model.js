const dynamoose = require('dynamoose');

const urlSChema = new dynamoose.Schema({
  id: String,
  text: String,
  prediction: Number,
  checked: Boolean,
  label: Boolean
});

module.exports = urlSChema;
