/**
 * People
 */
import peopleQuery from "./Query/people";
import peopleMutation from "./Mutation/people";
/**
 * Pet
 */
import petQuery from "./Query/pet";
import petMutation from "./Mutation/pet";

const resolvers = {
  Query: {
    ...peopleQuery,
    ...petQuery
  },
  Mutation: {
    ...peopleMutation,
    ...petMutation
  }
};

export default resolvers;
