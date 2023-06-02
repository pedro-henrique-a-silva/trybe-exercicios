// Seu código aqui

// Requisito 1

const mudaTagP = () => {
  // const tagP = document.querySelector('.center-content p:nth-of-type(2)');
  const tagP = document.getElementsByTagName('p')[1];
  tagP.innerHTML = 'Daqui a 2 anos me vejo como um Dev Casca grossa :)';
};

// Requisito 2

const mudaFundoMain = () => {
  // const tagMain = document.querySelector('.main-content');
  const tagMain = document.getElementsByClassName('main-content')[0];
  tagMain.style.backgroundColor = 'rgb(76, 164, 109)';
};

// Requisito 3

const mudaFundoCentro = () => {
  // const sectionCenter = document.querySelector('.center-content');
  const sectionCenter = document.getElementsByClassName('center-content')[0];
  sectionCenter.style.backgroundColor = 'white';
};

// Requisito 4

const mudaTitulo = () => {
  // const titulo = document.querySelector('.title');
  const titulo = document.getElementsByClassName('title')[0];
  titulo.innerHTML = 'Desafio - JavaScript';
};

// Requisito 5

const paragrafoUppercase = () => {
  // const paragrafo = document.querySelector('p');
  const paragrafo = document.getElementsByTagName('p')[0];
  paragrafo.innerText = paragrafo.innerText.toUpperCase();
};

// Requisito 6
const moveParagraphToFooter = () => {
  // const paragraphs = document.querySelectorAll('.center-content p');
  const paragraphs = document.getElementsByClassName('center-content')[0].children;
  // const paragraphFooter = document.querySelector('footer p');
  const paragraphFooter = document.getElementsByTagName('footer')[0].children;

  for (let index = 0; index < paragraphs.length; index += 1) {
    paragraphFooter[0].innerText = `${paragraphFooter[0].innerText} ${paragraphs[index].innerText}`;
  }
};

mudaTagP();
mudaFundoMain();
mudaFundoCentro();
mudaTitulo();
paragrafoUppercase();
moveParagraphToFooter();
