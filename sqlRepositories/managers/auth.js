const { users } = require('../models');

let funcs = {};

funcs.createUser = async function ({ model }, transaction) {
  return users.create(model, { transaction });
};

funcs.findUser = async function ({
  query,
  attributes = { exclude: ['created_at', 'updated_at', 'deleted_at'] }
}) {
  return users.findOne({ where: query, attributes });
};

module.exports = funcs;
