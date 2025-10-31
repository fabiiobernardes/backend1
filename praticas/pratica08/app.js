require("dotenv").config();
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

const usuariosRouter = require('./routes/usuariosRouter');
const produtosRouter = require('./routes/produtosRouter');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/usuarios', usuariosRouter);
app.use('/', produtosRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ msg: 'Erro interno' });
});

module.exports = app;
