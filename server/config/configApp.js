const path = require('path');
const morgan = require('morgan');
const express = require('express');

const cookieParser = require('cookie-parser');
const session = require('express-session');

const contentRouter = require('../routers/contentRouter');

module.exports = function configApp(app) {
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.resolve('public')));

  app.use(cookieParser());

  // app.use(session(sessionConfig));

  app.use('/', contentRouter);
};
