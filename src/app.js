require('dotenv').config();
const logger = require('morgan');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const inventoryRouter = require('./routes/inventory');
const { PORT, CORS_WHITELISTED_DOMAINS } = require('./utils/constants');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(
  cors({
    origin: function (origin, callback) {
      const whitelist = JSON.parse(CORS_WHITELISTED_DOMAINS);
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(createError(400, 'Not allowed by CORS'));
      }
    },
    credentials: true,
    exposedHeaders: ['set-cookie'],
  })
);
app.use('/users', usersRouter);
app.use('/inventory', inventoryRouter);

app.get('/', (request, response, next) => {
  response.sendStatus(200);
});

app.listen(PORT);
