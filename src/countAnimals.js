const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  // Objeto para armazenar a soma dos animais por espécie
  const especies = {};
  // Para cada animal vamos somar ele no array de animais que moram no zoo
  data.species
    .forEach((animals) => {
      especies[animals.name] = animals.residents.length;
    });
  // se não encontrar o animal passado no parametro, retorna o objeto acima;
  if (!animal) {
    return especies;
  }
  // Desestruturar o objeto pra achar as propriedade species e sex dos animais;
  const { species, sex } = animal;

  // Encontra a espécie;
  const findSpecies = data.species
    .find((element) => element.name === species);

  // Se não tiver nenhum dado sobre sexo, retorna o objeto com todos os animais do zoo;
  if (!sex) {
    return findSpecies.residents.length;
  }
  // Filtra os animais pelo sexo e retorna a contagem;
  const residentesFilter = findSpecies.residents
    .filter((resident) => resident.sex === sex);
  return residentesFilter.length;
};
module.exports = countAnimals;

// Criar uma função que retorne a quantidade de animais { species: 'penguins' };
// Retorno será um numero
// A quantidade eh o tamanho do array
// Pode filtrar por sexo retornar um numero com a qntde da especie e sexo
// Sem parametro deve retornar todas as espécies e a quantidade de residentes de cada uma;
// reduce volta um objeto;
