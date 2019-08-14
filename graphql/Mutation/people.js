import bcrypt from "bcrypt-nodejs";
import models from "../models";

const createUser = async (_, { params }) => {
  const user = await models.User.create({
    ...params,
    password: bcrypt.hashSync(params.password)
  });

  return user;
};

const userMutationTest = (_, { value }) => {
  console.log(value);
  return { value };
};

const deleteUserById = async (_, { id }) => {
  const user = await models.User.findByPk(id);
  await user.update({
    deleted: true
  });

  return user;
};

const peopleMutation = {
  createUser,
  userMutationTest,
  deleteUserById
};

export default peopleMutation;
