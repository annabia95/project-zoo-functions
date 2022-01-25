const data = require('../data/zoo_data');

/* Usei como referência o método includes() para checar se o elemento da array species possui o id utilizado como parâmetro. Além disso, utilizei o parâmetro rest para a função receber um número ilimitado de ids. Link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes */

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => [...ids].includes(specie.id));
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
