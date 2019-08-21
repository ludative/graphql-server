import models from "../models";

const createAnimal = async (_, { params }) => {
  const animal = await models.Animal.create({
    ...params
  });

  return animal;
};

const animalMutation = {
  createAnimal
};

export default animalMutation;
