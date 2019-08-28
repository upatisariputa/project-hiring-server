const models = require('../../models');
const { User } = require('../../models');

const getUsers = (req, res, next) => {
  User.findAll()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.error(err);
      next(err);
    });
};

const getUser = async ctx => {
  console.log(ctx);
  const { id } = ctx.params;

  const users = await models.User.findOne({ where: { id } });
  ctx.body = users;
};

module.exports = {
  getUsers,
  getUser
};
