const boom = require('@hapi/boom');
const { config } = require('../config/config');

function checkApiKey(req, res, next) { 
  const apiKey = req.headers['api'];
  if (apiKey === config.apiKey)
    next();
  else
    next(boom.unauthorized());
}

function checkRoles(...roles) {
  return (req, res, next) => {
    roles.includes(req.user.role) ?
      next() :
      next(boom.unauthorized())
  }
}

module.exports = {checkApiKey, checkRoles};