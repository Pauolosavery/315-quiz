const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

authRouter.route('/reg')
  .post(async (req, res) => {
    console.log(req.body);
    try {
      const { name, password } = req.body;
      const hashPass = await bcrypt.hash(password, 10);
      const regUser = await User.create({
        name,
        password: hashPass,
      });
      const sessionUser = {
        id: regUser.id,
      };
      req.session.user = sessionUser;
      res.status(200).json({ id: regUser.id, name: regUser.name });
    } catch (err) {
      res.status(500).json({ errorMessage: err.message });
    }
  });

// authRouter.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     console.log(email, password);
//     const checkUser = await User.findOne({ where: { email } });
//     if (!checkUser) {
//       res.json({ status: 'not ok', errorMessage: 'Пользователя не существует или пароль не верный' });
//       return;
//     }
//     // console.log(checkUser)
//     const passCheck = await bcrypt.compare(password, checkUser.password);
//     if (passCheck) {
//       const newUser = {
//         id: checkUser.id,
//       };
//       req.session.user = newUser;
//       res.status(200).json({ status: 'ok' });
//     } else {
//       res.json({ status: 'not ok', errorMessage: 'Пользователя не существует или пароль не верный' });
//     }
//     // return res.json({ status: 'not ok', errorMessage: 'Неверные логин и/или пароль' });
//   } catch (error) {
//     res.status(500).json({ errorMessage: error });
//   }
// });

// authRouter.get('/logout', (req, res) => {
//   req.session.destroy();
//   res.clearCookie('user_sid');
//   res.redirect('/');
// });

module.exports = authRouter;
