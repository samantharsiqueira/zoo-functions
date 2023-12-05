const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  // seu código aqui
  const findEmployee = data.employees.find((person) => employeeName === person.firstName || employeeName === person.lastName);
  return findEmployee || {};
};

// Retorne um objeto vazio caso a função não receba parâmetros;
// Retorne as informações da pessoa colaboradora caso o parâmetro seja igual ao nome ou igual ao último nome;
// data.employees pra acessar 
// percorrer esse array e encontrar a pessoa pelo employeeName === fistName || === lastNme;
// retornar o objeto com as informações ou vazio 

module.exports = getEmployeeByName;
