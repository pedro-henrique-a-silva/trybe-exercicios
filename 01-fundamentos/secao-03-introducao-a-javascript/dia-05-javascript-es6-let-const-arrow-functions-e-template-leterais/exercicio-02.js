function substituaX(nome) {
  const frase = 'Tryber x aqui!';
  let arrayFrase = frase.split(' ');

  return `${arrayFrase[0]} ${nome} ${arrayFrase[2]}`
}




function minhasSkills(msg) {
  const skills = ['css', 'javascript', 'ES6'];

  return `${msg} 
Minhas três principais habilidades são: 
    ${skills[0]}
    ${skills[1]}
    ${skills[2]}`
}

console.log(minhasSkills(substituaX('pedro')));