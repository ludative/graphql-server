import models from "../models";

const getUsers = async () => {
  const users = await models.User.findAndCountAll();
  return users;
};

const getUserById = async (_, { id }) => {
  const user = await models.User.findByPk(id);
  return user;
};

const peopleQuery = {
  getUsers,
  getUserById
};

export default peopleQuery;
