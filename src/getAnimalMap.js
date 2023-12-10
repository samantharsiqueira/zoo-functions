const data = require('../data/zoo_data');

// Mapeia os residentes com base no sexo e ordena se necessário
const mapResidents = (residents, sex, sorted) =>
  residents
    .filter((resident) => !sex || resident.sex === sex)
    .map((resident) => resident.name)
    .sort((a, b) => (sorted ? a.localeCompare(b) : 0));

// Processa as espécies e constrói um mapa com base nas opções fornecidas
const processSpecies = (acc, species, includeNames, sorted, sex) => {
  const { location, name, residents } = species;

  acc[location] = [
    ...(acc[location] || []), // Usando spread operator para garantir que a localização exista
    includeNames ? { [name]: mapResidents(residents, sex, sorted) } : name,
  ];

  return acc;
};

// Um mapa de animais com base nas opções fornecidas
const getAnimalMap = ({ includeNames, sorted, sex } = {}) =>
  data.species.reduce((acc, species) =>
    processSpecies(acc, species, includeNames, sorted, sex), {});

module.exports = getAnimalMap;
