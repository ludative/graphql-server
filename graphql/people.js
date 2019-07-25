import { people, getById, addPerson } from './db'

// const people = () => people;
// const person = (_, { id }) => {
//     return getById(id)
// };

const peopleQuery = {
    people,
    person
};

const peopleMutation = {

};

export default {
    peopleQuery,
    peopleMutation
}