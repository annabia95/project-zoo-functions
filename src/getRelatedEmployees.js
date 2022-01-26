const data = require('../data/zoo_data');

/* Usei some para retornar um valor booleano se ao menos um elemento de um array manager satisfaça a condição de ser gerente (Ser gerente é não ter niguem como gerente). Includes permite checar se o id utilizado como parâmetro está presente no array. Se sim, retorna true, se não retorna false */
function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

/* console.log(isManager('b0dc644a-5335-489b-8a2c-4e086c7819a2'));
console.log(isManager('burlId'));
console.log(isManager('stephanieId')); */

function getRelatedEmployees(managerId) {
/* Quando for false (!), temos que: */
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } /* Quando verdadeiro, utilizo filter para obter a minha array com as pessoas administradas pelo meu manageId e posteriormente utilizo map para criar uma nova array somente com o nome das pessoas que ela é responsável */
  const filterId = data.employees.filter((employee) => (employee.managers.includes(managerId)));
  console.log(filterId);
  return filterId.map((employee) => `${employee.firstName} ${employee.lastName}`);
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
