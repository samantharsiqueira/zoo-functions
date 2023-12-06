const getOpeningHours = require('../src/getOpeningHours');

const hours = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

const closed = 'The zoo is closed';
const open = 'The zoo is open';

describe('Testes da função getOpeningHours', () => {
  it('Para os parâmetros Monday e 09:00-AM, deve retornar "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(closed);
  });

  it('Para os parâmetros Tuesday e 09:00-AM, deve retornar "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(open);
  });

  it('Para os parâmetros Wednesday e 09:00-AM, deve retornar "The zoo is closed"', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(closed);
  });

  it('Teste não passando argumentos. Deverá retornar o objeto:', () => {
    expect(typeof getOpeningHours()).toBe('object');
    expect(getOpeningHours()).toEqual(hours);
  });

  it('Para os parâmetros Thu e 09:00-AM, deve retornar "The day must be valid. Exemple: Monday"', () => {
    expect(() => getOpeningHours('Wed', '09:00-AM')).toThrow(new Error('The day must be valid. Example: Monday'));
  });

  it('Para os parâmetros Friday e 09:00-ZM, deve retornar "The abbreviation must be \'AM\' or \'PM\'', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });

  it('Para os parâmetros Saturday e C09:00-AM, deve retornar "The hour should represent a number', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(new Error('The hour should represent a number'));
  });

  it('Para os parâmetros Sunday e 09:c00-AM, deve retornar "The hour should represent a number', () => {
    expect(() => getOpeningHours('Sunday', '09:c00-AM')).toThrow(new Error('The hour should represent a number'));
  });

  it('Para os parâmetros Friday e 13:00AM, deve retornar "The hour must be between 0 and 12"', () => {
    expect(() => getOpeningHours('Friday', '13:00-AM')).toThrow(new Error('The hour must be between 0 and 12'));
  });

  it('Para os parâmetros Saturday e 12:60AM, deve retornar "The minutes must be between 0 and 59"', () => {
    expect(() => getOpeningHours('Saturday', '12:60-AM')).toThrow(new Error('The minutes must be between 0 and 59'));
  });
});
