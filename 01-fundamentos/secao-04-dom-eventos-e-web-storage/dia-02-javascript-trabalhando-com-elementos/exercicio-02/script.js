// Acesse o elemento where-are-you.
// Acesse parent a partir de where-are-you e adicione uma color a ele.
const mudaCorPai = () => {
  // quando usamos o parentElement, o js nos retorna o elemento pai 
  // com todos os seus elementos filhos, ou seja os elementos que tem dentro dele
  const paiWhereAre = document.getElementById('where-are-you').parentNode;
  // quando usamos o parentNode, o js nos retorna apenas o nó pai do elemento
  // sem trazer as demais tags que existem
  paiWhereAre.style.color = 'red'
  // console.log(paiWhereAre);
};

mudaCorPai();

// Acesse o first-child-of-child e adicione um texto a ele. Você se lembra dos vídeos da aula anterior? 
// Eles ensinam como fazer isso.
const addText = () => {
  const fistChildOfChild = document.getElementById('where-are-you').childNodes;
  fistChildOfChild[1].innerHTML = 'Olá'
};

addText();
// Acesse o first-child a partir de parent.
const fistParentChild = () => {
  const parentChild = document.getElementById('parent').firstElementChild;
  // console.log(parentChild);
};

fistParentChild();

// Acesse o first-child a partir de where-are-you.
const whereAreFirst = () => {
  const fist = document.getElementById('where-are-you').previousSibling.previousSibling;
  // console.log(fist);
};

whereAreFirst();
// Acesse o texto Attention! a partir de where-are-you.
const whereAreAtention = () => {
  const attention = document.getElementById('where-are-you').nextSibling;
  // console.log(attention);
};

whereAreAtention();
// Acesse o third-child a partir de where-are-you.
const whereArethird = () => {
  const third = document.getElementById('where-are-you').nextElementSibling;
  // console.log(third);
};
whereArethird();
// Acesse o third-child a partir de parent.
const parentthird = () => {
  const third = document.getElementById('parent').children[2];
  console.log(third);
};

parentthird();