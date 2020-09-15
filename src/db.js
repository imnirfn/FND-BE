const mongoose = require('mongoose');
const config = require('./config');

const url = config.mongoURL + config.database;
console.log(url, 'the mongo url');

const connection = async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).catch((err) => {
    console.log(err);
  });

  // Listen to multipl events
  mongoose.connection.on('connected', () => {
    console.log(`Connected to ${url}`);
  });

  mongoose.connection.on('error', (err) => {
    console.log(`Error has occured ${err}`);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Connection is disconnected');
  });
};

module.exports = connection;
