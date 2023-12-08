const data = require('../data/zoo_data');

const zoo = data.species;

const countAnimals = (animal) => {
  // Se parametro for vazio, retorna um objeto com todos os animais.
  if (!animal) {
    return Object.keys(zoo).reduce((animal, species) => {
      result[species] = zoo.length;
      return animal;
    }, {});
  }

  // Se o parâmetro `species` for fornecido, retornar a contagem para essa espécie
  if (animal.species && zoo[animal.species]) {
    // Se a chave `sex` também for fornecida, filtrar por sexo
    if (animal.sex) {
      return zoo[animal.species].reduce((count, animal) => {
        if (animal.sex === params.sex) {
          return count + 1;
        }
        return count;
      }, 0);
    }
    // Se apenas a espécie for fornecida, retornar a contagem total
    return zoo[animal.species].length;
  }
};
module.exports = countAnimals;

// Criar uma função que retorne a quantidade de animais { species: 'penguins' };
// Retorno será um numero
// A quantidade eh o tamanho do array
// Pode filtrar por sexo retornar um numero com a qntde da especie e sexo
// Sem parametro deve retornar todas as espécies e a quantidade de residentes de cada uma;
// reduce volta um objeto;
