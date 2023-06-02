// exercise-bonus.test.js

const searchEmployee = require('../src/searchEmployee');

describe('5 - Neste exercício, você irá praticar o desenvolvimento orientado a testes implementando `a função` e `os testes` para essa função', () => {

  it ('Testa se searchEmployee é uma função', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(typeof searchEmployee).toBe('function')
  });
  
  it ('Testa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana')
    expect(searchEmployee('5569-4', 'firstName')).toBe('George')
  });
  
  it ('Testa se searchEmployee(id, "lastName") retorna o segundo nome do usuário da id consultada', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(searchEmployee('8579-6', 'lastName')).toBe('Gates')
    expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs')
  });
  
  it ('Testa se searchEmployee(id, "specialities") retorna um array com todas as habilidades do id pesquisado', () => {
    // Remova o fail e escreva seus testes abaixo
    const specialities = searchEmployee('5569-4', 'specialities');

    expect(specialities).not.toBeNull()
    expect(Array.isArray(specialities)).toBeTruthy();
    // expect(typeof specialities).toBe('object')
  });
  
  it ('Testa se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(() => {searchEmployee('5569-', 'specialities')}).toThrow('ID não identificada');
  });
  
  it ('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(() => {searchEmployee()}).toThrow();
  });
  
  it ('Testa a mensagem do erro para informação inexistente', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(() => {searchEmployee()}).toThrow('Informações invalidas');
  });
});
