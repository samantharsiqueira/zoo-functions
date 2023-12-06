const data = require('../data/zoo_data');

const isManager = (id) =>
  data.employees.some((employee) => employee.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    const employeeArray = data.employees
      .filter((employee) => employee.managers.includes(managerId))
      .map((employee) => `${employee.firstName} ${employee.lastName}`);
    return employeeArray;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };

// verificar se o id do parametro é igual do manager
// se sim true, se não false
// Se o seu id ta na chave manager vc eh manager
// utilizar a funcao isManager pra veriricar se a pessoa eh gerente ou nao
// se for retorne um array com o nome e sobre nome das pessoas GERENCIADAS
// throw  new  Error('O id inserido não é de uma pessoa colaboradora gerente!');
// sem o filter nao ia, nao tem como mesmo? Retornava um array com todos.
