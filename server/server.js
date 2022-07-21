require('@babel/register');
require('dotenv').config();

const express = require('express');
const { sequelize } = require('./db/models');

const app = express();

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, async () => {
  console.log(`Собачки погрызли кроссовок на: ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('DataBase is working')
  } catch (error) {
    console.log('Alarm! DataBase is not ok!');
  }
  });