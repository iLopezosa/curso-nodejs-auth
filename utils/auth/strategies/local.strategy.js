const { Strategy } = require('passport-local');
const { createHash } = require('node:crypto');
const UserService = require('../../../services/user.service');
const boom = require('@hapi/boom');

const userService = new UserService();

const localStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  async (email, password, done) => {
  try {
    const user = await userService.findByEmail(email);
    const matches = createHash('sha512').update(password).digest('base64') === user.password;
    delete user.dataValues.password;
    if (matches)
      done(null, user);
    else
      done(boom.unauthorized(), false);
  } catch(err) {
    done(boom.unauthorized(), false);
  }
});

module.exports = localStrategy;