import models from "../models";

const createPet = async (_, { params }) => {
  const pet = await models.Pet.create({
    ...params
  });

  return pet;
};

const petMutation = {
  createPet
};

export default petMutation;
