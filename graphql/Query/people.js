import models from '../models'

const people = async () => {
  const users = await models.User.findAll()
  return users
}
const person = (_, { id }) => {
  return getById(id)
}

const getById = async id => {
  const user = await models.User.findByPk(id)
  return user
}

const peopleQuery = {
  people,
  person
}

export default peopleQuery
