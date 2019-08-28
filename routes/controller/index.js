const { User } = require('../../models');
const { Todo } = require('../../models');

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

const getTodo = (req, res, next) => {
  // console.log(req);
  const userId = req.params.id;
  Todo.findAll({ where: { userId } })
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      console.error(err);
      next(err);
    });
};

module.exports = {
  getUsers,
  getTodo
};
