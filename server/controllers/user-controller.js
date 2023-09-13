const userService = require('../service/user-service');

class UserController {
  async registration(req, res, next) {
    try {
      const {email, username, password} = req.body;

      const userData = await userService.registration(
        email,
        username,
        password,
      );
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (error) {
      console.log('=======', error);
      // return res.json(userData);
      // console.log('%c jordan req', 'color: lime;', req);
      // console.log('%c jordan res', 'color: lime;', res);
    }
  }

  async login(req, res, next) {
    try {
    } catch (error) {}
  }

  async logout(req, res, next) {
    try {
    } catch (error) {}
  }

  async getUsers(req, res, next) {
    try {
      res.json([
        {email: 'asd@f.f', username: 'asd'},
        {email: 'oleg', username: 'ddiim'},
      ]);
    } catch (error) {}
  }

  async refresh(req, res, next) {
    try {
    } catch (error) {}
  }

  async activate(req, res, next) {
    try {
    } catch (error) {}
  }
}

module.exports = {
  UserController: new UserController(),
};
