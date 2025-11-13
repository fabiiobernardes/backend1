const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const apidocsRouter = require('./routes/apidocsRouter');
app.use('/api-docs', apidocsRouter);


module.exports = app;
