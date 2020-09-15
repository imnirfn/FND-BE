const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const {
  connectToAWS,
  connectToLambda,
  connectToDynamo
} = require('./services/index.services');

const mongo = require('./db');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
// Connect to AWS instance
connectToAWS();
connectToLambda();
connectToDynamo();
mongo();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl} ${JSON.stringify(req.body)}`);
  next();
});

app.get('/', (req, res) => {
  res.json({
    message: 'Index api'
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
