import { People, getById } from '../db'


const people = () => People;
const person = (_, { id }) => {
    return getById(id)
};

const peopleQuery = {
    people,
    person
};

export default peopleQuery