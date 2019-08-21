import models from "../models";

const getAnimals = async () => {
  const animals = await models.Animal.findAndCountAll();
  return animals;
};

const AnimalQuery = {
  getAnimals
};

export default AnimalQuery;
