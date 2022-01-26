const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
/* Encontrando o funcionário pelo id com find(), tenho um objeto com as indormações do funcionário e posteriormente o primeiro animal que ele é responsável */
  const findAni = data.employees.find((employee) => [id].includes(employee.id)).responsibleFor[0];
  /* Com o id do animal, retorno o objeto residents a partir do objeto species */
  const animalInfo = data.species.find((animal) => animal.id === findAni).residents;
  /* Com as informações do animal corresponde, ordeno a idade em ordem decrescente com o sort e armazeno o primeiro objeto, ou seja, o animal mais velho */
  const TheOldest = animalInfo.sort((age1, age2) => age2.age - age1.age)[0];
  /* Por fim, crio a minha array com as informações objtidas do animal mais velho */
  return [TheOldest.name, TheOldest.sex, TheOldest.age];
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = getOldestFromFirstSpecies;
/* A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro.

O que será avaliado

Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie. */
