const data = require('../data/zoo_data');

// Verifica horários de funcionamento do zoo para cada dia da semana;
const daySchedule = () => {
  // Recupera a lista de dias da semana (data.hours)
  const days = Object.keys(data.hours);
  // Objeto para armazenar as informações de horário para cada dia da semana
  const daysOfWeek = {};

  // Um for pra cada dia da semana, pra preender com as informações
  days.forEach((day) => {
    // Adiciona as informações de horário e exibição para o dia atual
    daysOfWeek[day] = {
      // Se for segunda-feira, o zoológico está fechado || exibe o horário de abertura e fechamento
      officeHour: day === 'Monday' ? 'CLOSED'
        : `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      // Se for segunda-feira, exibe uma mensagem indicando que o zoológico estará fechado || filtra os animais disponíveis para aquele dia
      exhibition: day === 'Monday' ? 'The zoo will be closed!'
        : data.species.filter((specie) => specie.availability.includes(day))
          .map((specie) => specie.name),
    };
  });

  // Retorna o objeto com os horários de funcionamento para cada dia da semana
  return daysOfWeek;
};

const getSchedule = (scheduleTarget) => {
  // Recupera o retorno da função acima pra ver o funcionamento do zoo;
  const daysOfWeek = daySchedule();
  // Olha horários disponíveis para um animal específico
  const animalsHours = data.species.find(({ name }) => (name === scheduleTarget));

  // Se o dia da semana for igual o parametro
  if (daysOfWeek[scheduleTarget]) {
    // Retorna um objeto contendo as informações de horário para o dia específico
    return { [scheduleTarget]: daysOfWeek[scheduleTarget] };
  }

  // Verifica se não há alvo específico ou se o animal não foi encontrado
  if (!scheduleTarget || animalsHours === undefined) {
    // Retorna os horários de funcionamento para todos os dias da semana
    return daysOfWeek;
  }

  // Retorna os horários disponíveis para o animal específico
  return animalsHours.availability;
};

module.exports = getSchedule;
