const { number } = require('@hapi/joi');
const mongoose = require('mongoose');

const factCheckSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },

  text: {
    type: String,
    required: true
  },

  prediction: {
    type: String,
    required: true
  },

  sentiment: {
    type: number,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  },

  journalist: {
    type: mongoose.Schema.Types.ObjectId,
    refs: 'User'
  },

  result: {
    type: String,
    required: true,
    enum: ['AUTHENTIC', 'FAKE']
  }
});

exports.factCheckTransformer = (fact) => {
  const formatted = {
    id: fact._id,
    text: fact.text,
    prediction: fact.prediction,
    sentiment: fact.sentiment,
    data: fact.date,
    journalist: fact.journalist,
    result: fact.result
  };

  return formatted;
};

exports.User = mongoose.model('FactChecked', factCheckSchema);
