const data = require('../data/zoo_data');

/* Primeiro monto a estrutura do meu objeto para receber as informações do nome/sobrenome/id informado.
Estrutura do meu objeto:
{
  "id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
  "fullName": "Sharonda Spry", // nome completo: firstName + lastName
  "species": [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
  "locations": [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
} */
/* Criando uma array para conseguir aramazenar as informações do objeto com o push */
const objectEmployee = [];
/* Percorro a minha array com forEach() */
const theList = data.employees.forEach((employee) =>
  objectEmployee.push({
  /* Defino o que cada chave do meu objeto irá receber, utilizando HOFs para isso  */
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    /*  Filtro o objeto species e retorno somente o objeto com as espécies que a pessoa é responsável. Com o map crio posteriormente uma array somente com o nome das espécies (mesmo raciciocínio para localização) */
    species: data.species.filter((specie) =>
      employee.responsibleFor.includes(specie.id)).map((specieName) => specieName.name),
    locations: data.species.filter((specie) =>
      employee.responsibleFor.includes(specie.id)).map((specieLocation) => specieLocation.location),
  }));

function getEmployeesCoverage(obj) {
/*  Ao chamar a função sem argumentos ela deve retornar um array com a cobertura de todas as pessoas funcionárias. Nesse caso, retorna a lista criada anteriormente: */
  if (!obj) return objectEmployee;
  /*  Determino como chave do meu obj name e id para poder prencher a minha lista com as informações correspondentes */
  const { name, id } = obj;
  /* Uso find para retornar o primeiro funcionário com o id informado como parâmetro. Retorno a minha lista com as informações correspondentes */
  if (objectEmployee.find((employee) => employee.id === id)) {
    return objectEmployee.find((employee) => employee.id === id);
  }
  /* Uso find para retornar o primeiro funcionário com o nome/ sobrenome informado como parâmetro. Retorno a minha lista com as informações correspondentes */
  if (objectEmployee.find((employee) => employee.fullName.includes(name))) {
    return objectEmployee.find((employee) => employee.fullName.includes(name));
  }
  /* Caso não haja nenhuma pessoa com o nome ou id especificados a mensagem de erro é mostrada */
  throw new Error('Informações inválidas');
}
console.log(theList);
console.log(getEmployeesCoverage());
console.log(getEmployeesCoverage({ name: 'Spry' }));

module.exports = getEmployeesCoverage;
// Utilizei um pouco da lógica do projeto da Débora ([Debora Serra] Project Zoo Functions #5).
// Source link: https://github.com/tryber/sd-19-b-project-zoo-functions/pull/5/commits/db85279b49e51b49d51bcdc49143a15746889d48
