const { info, printMessage } = require('../src/printMessage');

describe('2 - Implemente o caso de teste para a função `printMessage`', () => {
  it ('Testa a propriedade personagem no objeto.', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(info).toHaveProperty('personagem');
  });
});

describe('3 - Ainda sobre a função `printMessage`, adicione os casos de teste a seguir`', () => {
  const msg = printMessage(info);
  it ('Testa a informação de boas vindas.', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(msg).toMatch('Boas vindas')
    
  });
  
  it ('Testa a informação referente ao nome da personagem.', () => {
    // Remova o fail e escreva seus testes abaixo
    expect(msg).toMatch(info.personagem)
  });
});

describe('4 - Crie um fluxo de exceção para a função `printMessage`', () => {
  it ('Testa o fluxo de exceção da função printMessage.', () => {
    const objTest = {valor1: 'valor1', valor2: 'valor2'}
    // Remova o fail e escreva seus testes abaixo
    expect(() => {printMessage('string')}).toThrow()
    expect(() => {printMessage([1, 2, 3, 4])}).toThrow()
    expect(() => {printMessage(3)}).toThrow()
    expect(() => {printMessage(objTest)}).toThrow()
  });
});
