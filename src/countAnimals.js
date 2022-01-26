const data = require('../data/zoo_data');

function countAnimals(animal) {
  /* Meu primeiro if satisfaz a primeira condição! Quando não tenho parâmetro, retorno um objeto com a espécie do animal como chave e a sua quantidade como valor */
  if (!animal) {
    return data.species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  /* Caso o animal seja informado, devo retornar a sua quantidade. Para armazernar essa array somente com as informações do respectivo animal, utilizo o find */
  const myAnimal = data.species.find((specie) => specie.name === animal.specie);
  /* Caso seja informado o sexo, utilizo o filter nesse novo array para retornar a quantidade de animais do sexo informado. */
  if (animal.sex) {
    return myAnimal.residents.filter((resident) => resident.sex === animal.sex).length;
  }
  /* Caso não seja informado o sexo, retorno somente a quantidade de animais daquela espécie */
  return myAnimal.residents.length;
}
console.log(countAnimals());
console.log(countAnimals({ specie: 'penguins' }));
console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));
module.exports = countAnimals;
