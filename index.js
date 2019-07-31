import { GraphQLServer } from 'graphql-yoga'
import { importSchema } from 'graphql-import'
import db from './graphql/db'
import resolvers from './graphql/resolvers'

db()

const typeDefs = importSchema('graphql/schema.graphql')

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => console.log('GraphQL Server is Starting'))
