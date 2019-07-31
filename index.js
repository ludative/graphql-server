import { GraphQLServer } from 'graphql-yoga'
import db from './graphql/db'
import resolvers from './graphql/resolvers'

db()

const server = new GraphQLServer({
  typeDefs: 'graphql/schema.graphql',
  resolvers
})

server.start(() => console.log('GraphQL Server is Starting'))
