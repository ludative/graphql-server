import { people, getById, addPerson } from './db'

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => {
      return getById(id)
    }
  },
  Mutation: {
    create: (_, { name, age, gender }) => addPerson(name, age, gender)
  }
}

export default resolvers
