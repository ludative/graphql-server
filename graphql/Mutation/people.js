import models from '../models'

const create = (_, { name, age, gender }) => addPerson(name, age, gender)

// const addPerson = async () => {
//     const user = await models.User.create
// }

const peopleMutation = {
  create
}

export default peopleMutation
