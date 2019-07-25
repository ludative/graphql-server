import { addPerson } from '../db'

const create = (_, { name, age, gender }) => addPerson(name, age, gender)

const peopleMutation = {
    create
};

export default peopleMutation