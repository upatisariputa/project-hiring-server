const models = require('../../models');

const getUsers = async ctx => {
  const users = await models.User.findAll();
  console.log(users);
  ctx.body = users;
};

const getUser = async ctx => {
  const { id } = ctx.params;

  const users = await models.User.findOne({ where: { id } });
  console.log(users);
  ctx.body = users;
};

module.exports = {
  getUsers,
  getUser
};
