class UserController {
  async registration(req, res, next) {
    try {
    } catch (error) {}
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
