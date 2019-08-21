/**
 * People
 */
import peopleQuery from "./Query/people";
import peopleMutation from "./Mutation/people";
/**
 * Animal
 */
import animalQuery from "./Query/animal";
import animalMutation from "./Mutation/animal";

const resolvers = {
  Query: {
    ...peopleQuery,
    ...animalQuery
  },
  Mutation: {
    ...peopleMutation,
    ...animalMutation
  }
};

export default resolvers;
