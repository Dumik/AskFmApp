const jwt = require('jsonwebtoken');
const tokenModal = require('../models/token-modal');

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: '30m',
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: '30d',
    });
    return {
      refreshToken,
      accessToken,
    };
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await tokenModal.findOne({user: userId});
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData;
    }
    const token = await tokenModal.create({user: userId, refreshToken});
  }
}

module.exports = new TokenService();
