const contentRouter = require('express').Router();

// const { Theme } = require('../db/models');
const { Question } = require('../db/models');

contentRouter.get('/quiz', async (req, res) => {
  // const themes = await Theme.findAll({ raw: true });
  const quiz = await Question.findAll({ 
    raw: true,
    include: [Question.Themes ],
  });
  // console.log("🚀 ~ file: contentRouter.js ~ line 12 ~ contentRouter.get ~ quest", quest)
  // res.json({ themes, quest });
  res.json({ quiz });
});

module.exports = contentRouter;
