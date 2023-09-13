const UserModal = require('../models/user-modal');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');

class UserService {
  async registration(email, username, password) {
    const candidate = await UserModal.findOne({email});
    const candidateFindUsername = await UserModal.findOne({username});

    if (candidate) {
      throw new Error('User already exists');
    }

    if (candidateFindUsername) {
      throw new Error('Username is not available');
    }

    const hashPassword = await bcrypt.hash(password, 13);
    const activationLink = uuid.v4();
    // const user = await UserModal.create({
    //   email,
    //   hashPassword,
    //   activationLink,
    //   username,
    // });
    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}api/activate/${activationLink}`,
    );
    // const userDto = new UserDto(user);
    // const tokens = tokenService.generateTokens({...userDto});
    // await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      // ...tokens,
      // user: userDto,
    };
  }
}

module.exports = new UserService();
