require('dotenv').config();
const logger = require('morgan');
const express = require('express');
const cors = require('cors');
const { PORT } = require('./utils/constants');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const usersRouter = require('./routes/users');
const inventoryRouter = require('./routes/inventory');
const configurePassport = require('./middleware/passport');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: function (origin, callback) {
      callback(null, true);
    },
    credentials: true,
    exposedHeaders: ['set-cookie'],
  })
);

configurePassport(app);

app.use('/users', usersRouter);
app.use('/inventory', inventoryRouter);

app.get('/', (request, response, next) => {
  response.sendStatus(200);
});

app.listen(PORT);
