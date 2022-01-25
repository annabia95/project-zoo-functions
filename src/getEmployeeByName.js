const data = require('../data/zoo_data');

/* console.log(data.employees[0].firstName); */
/* Não usei  filter porque vai me retornar uma array, sendo que a questão pede um objeto */

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const array = data.employees;
  return array.find((emp) => emp.firstName === employeeName || emp.lastName === employeeName);
}
console.log(getEmployeeByName('Wishart'));

module.exports = getEmployeeByName;
