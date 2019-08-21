import models from "../models";

const getPets = async () => {
  const pets = await models.Pet.findAndCountAll();
  return pets;
};

const petQuery = {
  getPets
};

export default petQuery;
