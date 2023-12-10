const data = require('../data/zoo_data');

const employeeObject = (employee) => ({
  id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,
  species: data.species.filter((specie) => employee.responsibleFor.includes(specie.id))
    .map((specie) => specie.name),
  locations: data.species.filter((specie) => employee.responsibleFor.includes(specie.id))
    .map((specie) => specie.location),
});
const getEmployeesCoverage = (coverageEmp) => {
  if (!coverageEmp) {
    return data.employees.map((employee) => employeeObject(employee));
  }
  const findEmp = data.employees.find((emp) => emp.firstName === coverageEmp.name
  || emp.lastName === coverageEmp.name || coverageEmp.id === emp.id);
  if (!findEmp) throw new Error('Informações inválidas');

  return employeeObject(findEmp);
};

/* Resolvi mas não passou em nenhum teste. Tentar de outro jeito simplificar a lógica.

// Retorne as informações da pessoa correspondente ao receber um objeto com a propriedade name:
const getEmployeesByName = (name) => {
  const findEmployee = data.employees.find((employee) =>
    (employee.firstName === name || employee.lastName === name));
  if (!name) throw new Error('Informações inválidas');

  return findEmployee;
};

console.log(getEmployeesByName('Nigel'));

// Retorne as informações da pessoa correspondente ao receber um objeto com a propriedade id;
const getEmployeesById = (id) => {
  const employeeId = data.employees.find((employee) =>
    (employee.id === id));
  if (employeeId === undefined) {
    throw new Error('Inválido');
  }
  return employeeId;
};

console.log(getEmployeesById('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

// Encontrar o animal pelo ID que o employee é resposável;
const getSpecies = (speciesId) => data.species.find((animal) => (animal.id === speciesId));

console.log(getSpecies('78460a91-f4da-4dea-a469-86fd2b8ccc84'));

const getEmployeesCoverage = (name) => {
  const employee = getEmployeesByName(name);

  const employeeCoverage = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: [],
    locations: [],
  };

  employee.responsibleFor.forEach((speciesId) => {
    const species = getSpecies(speciesId);
    employeeCoverage.species.push(species.name);
    employeeCoverage.locations.push(species.location);
  });

  return employeeCoverage;
};

console.log(getEmployeesCoverage('Nigel')); */

module.exports = getEmployeesCoverage;

// Receber um objeto como parametro nome/sobrenome ou id;
// Retornar um objeto com id/fullName//[species]//[locations];
// Retorne um array com as informações de todas as pessoas colaboradoras caso a função não receba parâmetro;
// Lance um erro caso o id seja inválido.
