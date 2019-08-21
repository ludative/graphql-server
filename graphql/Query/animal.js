import models from "../models";

const getAnimals = async () => {
  const animals = await models.Animal.findAndCountAll({
    order: [["createdAt", "DESC"]]
  });
  return animals;
};

const AnimalQuery = {
  getAnimals
};

export default AnimalQuery;
