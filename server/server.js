require('@babel/register');
require('dotenv').config();

const express = require('express');
const configApp = require('./config/configApp');
const { sequelize } = require('./db/models');

const app = express();
configApp(app);

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, async () => {
  console.log(`Server arbeitet: ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('DataBase arbeitet wunderbar!');
  } catch (error) {
    console.log('Alarm! DataBase ist nicht ok!');
  }
});
