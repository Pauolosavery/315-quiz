const contentRouter = require('express').Router();

const { Theme } = require('../db/models');
const { Question } = require('../db/models');

contentRouter.get('/quiz', async (req, res) => {
  // const themes = await Theme.findAll({ raw: true });
  const quiz = await Question.findAll({ 
    raw: true,
    include: [Question.Themes ],
  });
  console.log("🚀 ~ file: contentRouter.js ~ line 12 ~ contentRouter.get ~ quiz", quiz)
  // res.json({ themes, quest });
  res.json({ quiz });
});

contentRouter.get('/quiz', async (req, res) => {
    const themes = await Theme.findAll({ raw: true });
    res.json({ themes });

  });
module.exports = contentRouter;
