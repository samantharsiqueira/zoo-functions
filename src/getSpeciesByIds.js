const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => { // os tres pontinhos deixam a função receber parametros variáveis e retornam como array
  const animalsId = data.species.filter((elemento) => ids.includes(elemento.id));
  // filter para filtrar os elementos pelo parametro escolhido
  // includes serve pra ver se o elemento atual está no array pra incluir ele no final do filter
  // includes filtra o data.species e verifica se o id está lá e ai inclui ele no array novo do filter
  // não sei como retirar essa constante e esse return, não funciona.
  return animalsId;
};

module.exports = getSpeciesByIds;
