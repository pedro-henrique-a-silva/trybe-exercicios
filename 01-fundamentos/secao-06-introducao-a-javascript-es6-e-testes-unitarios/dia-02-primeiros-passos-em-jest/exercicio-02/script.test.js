const {
  removeItem,
  myFizzBuzz,
  encode,
  decode, 
  techList,
  hydrate, } = require('./script');


describe('Testa função removeItem', () => {
  // Verifique se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado.
  test('Verifique se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado.', () => {
    expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  });
  // Verifique se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].
  test('Verifique se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].', () => {
    expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  });
  // Verifique se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado.
  test('Verifique se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado.', () => {
    expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  });
});

describe('Testa função myFizzBuzz', () => {
  // Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz".
  it('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz".', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  // Caso num seja um número divisível apenas por 3, a função retorna "fizz".
  it('Caso num seja um número divisível apenas por 3, a função retorna "fizz".', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
  // Caso num seja um número divisível apenas por 5, a função retorna "buzz".
  it('Caso num seja um número divisível apenas por 5, a função retorna "buzz".', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  // Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num.
  it('Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num.', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  // Caso num não seja um número, a função retorna false.
  it('Caso num não seja um número, a função retorna false.', () => {
    expect(myFizzBuzz('s')).toBe(false);
  });
})



describe('Testa função Encode', () => {
  // Teste se encode é uma funções.
  test('Testa se a função encode existe', () => {
    expect(typeof encode).toBe('function');
  })
  //Testa se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente.
  test('Testa se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente.', () => {
    expect(encode('aeiou')).toBe('12345');
  })
  // Teste se as demais letras e os demais números não são convertidos para cada caso.
  test('Teste se as demais letras e os demais números não são convertidos para cada caso.', () => {
    expect(encode('bcdfg')).toBe('bcdfg');
  })
  // Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.
  test('Teste se a string que é retornada tem o mesmo tamanho que a passada como parâmetro.', () => {
    expect(encode('ola mundo').length).toBe(9);
  })
  
})

describe('Testa função Decode', () => {
  // Teste se decode é uma funções.
  it('Testa se a função decode existe', () => {
    expect(typeof decode).toBe('function');
  })
  //teste se os números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u, respectivamente.
  it('Teste se os números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u, respectivamente.', () => {
    expect(decode('12345')).toBe('aeiou');
  })
  // Teste se as demais letras e os demais números não são convertidos para cada caso.
  it('Teste se as demais letras e os demais números não são convertidos para cada caso.', () => {
    expect(decode('67890')).toBe('67890');
  })
  // Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.
  it('Teste se a string que é retornada tem o mesmo tamanho que a passada como parâmetro.', () => {
    expect(decode('4l1 m5nd4').length).toBe(9);
  })
})


describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologia deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cerveja e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});


