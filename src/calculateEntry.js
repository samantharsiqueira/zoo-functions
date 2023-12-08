const data = require('../data/zoo_data');

// filtrar a idade das pessoas pra saber quantas de cada idade entraram no zoo;
const countEntrants = (entrants) => {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  return {
    child,
    adult,
    senior,
  };
};

const calculateEntry = (entrants, price) => {
  // Se não tiver nenhuma pessoa no zoo, retorna zero.. array vazio = 0;
  if (!entrants || entrants.length === 0) {
    return 0;
  }

  // recupera a resposta da primeira pra poder calcular o preço;
  const ageGroups = countEntrants(entrants);

  // Calcula o valor do total das entradas;
  const priceChild = ageGroups.child * data.prices.child;
  const priceAdult = ageGroups.adult * data.prices.adult;
  const priceSenior = ageGroups.senior * data.prices.senior;

  return priceChild + priceAdult + priceSenior;
};

module.exports = { calculateEntry, countEntrants };
