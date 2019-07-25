export let People = [
  {
    id: '0',
    name: 'Nicolas',
    age: 18,
    gender: 'female'
  },
  {
    id: '1',
    name: 'Jisu',
    age: 18,
    gender: 'female'
  },
  {
    id: '2',
    name: 'Japan Guy',
    age: 18,
    gender: 'male'
  },
  {
    id: '3',
    name: 'Daal',
    age: 18,
    gender: 'male'
  },
  {
    id: '4',
    name: 'JD',
    age: 18,
    gender: 'male'
  },
  {
    id: '5',
    name: 'moondaddi',
    age: 18,
    gender: 'male'
  },
  {
    id: '6',
    name: 'flynn',
    age: 18,
    gender: 'male'
  }
]

export const getById = id => {
  const filteredPeople = People.filter(person => person.id === String(id))
  return filteredPeople[0]
}

export const addPerson = (name, age, gender) => {
  const newPerson = {
    id: `${People.length + 1}`,
    name,
    age,
    gender
  }
  People.push(newPerson)
  return newPerson
}

export const deletePerson = id => {
  const cleanPerson = People.filter(person => person.id !== String(id))
  if (People.length > cleanPerson.length) {
    people = cleanPerson
    return true
  } else {
    return false
  }
}
