const data = require('../data/zoo_data');

/* console.log(data.species[0].residents[2].age); */
/* Usei find porque retorna o primeiro elemento que satisfaz uma condição e every por retornar true or false caso a idade informada maior ou igual a idade mínima */

function getAnimalsOlderThan(animal, age) {
  const filterAnimal = data.species.find((specie) => specie.name === animal);
  return filterAnimal.residents.every((resident) => resident.age >= age);
}
console.log(getAnimalsOlderThan('penguins', 10));
console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
