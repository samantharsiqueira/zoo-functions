const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  // Nessa linha eu tô procurando o animal e vendo se o nome dele bate com a espécie.
  const findAnimal = data.species.find((specie) => specie.name === animal);
  // Nessa eu to vendo se o animal que eu encontrei acima tem na parte de residentes (onde tão as informações) a idade correta 
  return findAnimal.residents.every((specie) => specie.age >= age);
};

// receber uma espécie e uma idade e retornar se todos os animais tem a idade ou são mais velhos
// retornar um valor boleano?
// Eu preciso encontrar o animal find ou filter
// verificar se eles tem a idade ou mais.
// retornar true or false com every pq são todos os animais.
// onde eu vejo a espécie deles? pelo nome.
// o nome tem que ser igual o que? A espécie passada no parametro.. como fazer isso?

module.exports = getAnimalsOlderThan;
