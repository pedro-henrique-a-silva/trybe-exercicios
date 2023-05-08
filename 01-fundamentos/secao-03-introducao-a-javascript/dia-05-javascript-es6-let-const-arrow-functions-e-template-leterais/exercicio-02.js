function substituaX(nome) {
  const frase = 'Tryber x aqui!';
  let arrayFrase = frase.split(' ');

  return `${arrayFrase[0]} ${nome} ${arrayFrase[2]}`
}




function minhasSkills(msg) {
  const skills = ['css', 'javascript', 'ES6'];
  let resultado = `${msg} 
Minhas três principais habilidades são:`;

  for (let skill of skills) {
    resultado = `${resultado}
    - ${skill}`;
  }
  return resultado;
}

console.log(minhasSkills(substituaX('pedro')));