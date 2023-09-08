const UserModal = require('../models/user-modal');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');

class UserService {
  async registration(email, password) {
    const candidate = await UserModal.findOne({email});
    if (candidate) {
      throw new Error('User already exists');
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4()
    const user = await UserModal.create({email, hashPassword, activationLink});
    await mailService.sendActivationMail(email, activationLink)
  }
}

module.exports = new UserService();
