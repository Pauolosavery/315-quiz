const path = require('path');
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');

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
  app.use(cors({origin:['http://localhost:3000'],credentials:true,}));

  app.use('/', contentRouter);
};
