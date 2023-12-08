const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  // Primeiro eu preciso achar o employee pelo ID;
  const findEmployee = data.employees
    .find((employee) => employee.id === id);
    // Encontrar a primeira espécie que ele é responsavél no array;
  const firstspecie = findEmployee.responsibleFor[0];
  // Pegar as informações da espécie que eu achei pra poder trabalhar com elas;
  const findSpecieId = data.species.find((specie) => specie.id === firstspecie);
  // Se o ID Do animal for igual ao encontrado acima, vamos por o reduce nele pra achar o mais velho;
  if (findSpecieId) {
    const oldestAnimal = findSpecieId.residents.reduce((acumulador, valorAtual) => {
      // verifica se a maior idade está no acumulador ou no valor atual pra retornar;
      if (!acumulador || valorAtual.age > acumulador.age) {
        return valorAtual;
      }
      return acumulador;
    });
    // Retorna o array do oldestAnimal
    return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
  }
};

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;

// Encontrar o employee pelo ID.
// Encontra a primeira espécie de animal que o employee é responsavél
// find o animail mais velho
// retornar um array com informações do oldestAnimal com nome, sexo e idade;
