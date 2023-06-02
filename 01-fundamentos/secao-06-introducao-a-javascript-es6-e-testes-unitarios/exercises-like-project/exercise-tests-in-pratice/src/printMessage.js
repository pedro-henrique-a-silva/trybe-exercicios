let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

const printMessage = (characterInfo) => {
  if (typeof characterInfo !== 'object' || (!Object.keys(characterInfo).includes('personagem'))) {
    throw new Error('objeto inválido.');
  }
  // Implemente seu código aqui
  let result = `Boas vindas, ${characterInfo.personagem}`;

  return result;
};

try {
  console.log(printMessage('ola mundo'));
} catch (e) {
  console.log(e.message);
}

module.exports = { info, printMessage };