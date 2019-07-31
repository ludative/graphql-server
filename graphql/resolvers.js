import peopleQuery from './Query/people'
import peopleMutation from './Mutation/people'

const resolvers = {
  Query: {
    ...peopleQuery
  }
  // Mutation: {
  //   ...peopleMutation
  // }
}

export default resolvers
