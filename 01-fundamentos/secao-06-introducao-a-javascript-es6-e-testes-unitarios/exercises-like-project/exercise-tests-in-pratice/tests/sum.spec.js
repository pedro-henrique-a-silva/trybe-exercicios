const sum = require('../src/sum');

describe('1 - Crie os casos de teste da funcão `Sum`', () => {

  it ('Testa se ao receber "4" e "5" como parâmetro, retorna "9" como resultado', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(sum(4, 5)).toBe(9);
  });

  it ('Testa se ao receber "0" nos dois parâmetros, retorna o resultado "0"', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(sum(0, 0)).toBe(0);
  });
  
  it ('Testa se dispara um erro, caso receba como parâmetro uma string', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(() => {sum('2', 8)} ).toThrow()
    expect(() => {sum(2, '8')} ).toThrow()
  });

  it ('Testa se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(() => {sum(4, "5")} ).toThrow('parameters must be numbers')
  });
});
