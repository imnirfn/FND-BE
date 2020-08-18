const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const {
  connectToAWS,
  connectToLambda
} = require('./services/index.services');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

// Connect to AWS instance
connectToAWS();
connectToLambda();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Index api'
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
