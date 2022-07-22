const path = require('path');
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const isAuth = require('../middlewares/authMW');

const contentRouter = require('../routers/contentRouter');
const authRouter = require('../routers/authRouter');

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'quiz',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

module.exports = function configApp(app) {
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.resolve('public')));

  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(isAuth);

  app.use('/', contentRouter);
  app.use('/', authRouter);
};
