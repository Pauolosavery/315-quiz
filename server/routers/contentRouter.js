const contentRouter = require('express').Router();

const { Theme } = require('../db/models');
const { Question } = require('../db/models');

contentRouter.get('/', async (req, res) => {
  const themes = await Theme.findAll({ raw: true });
  const quest = await Question.findAll({ raw: true });
  res.json({ themes, quest });
});

module.exports = contentRouter;
