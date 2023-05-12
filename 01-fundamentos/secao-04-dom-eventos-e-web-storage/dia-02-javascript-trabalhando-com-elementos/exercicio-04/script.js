const bodyElement = document.body;

// Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
const addH1 = () => {
  const tituloH1 = document.createElement('h1')
  tituloH1.innerText = 'TrybeTrip - Agência de Viagens';
  bodyElement.appendChild(tituloH1);

};
// Adicione a tag main com a classe main-content como filho da tag body;
const addMain = () => {
  const mainElement = document.createElement('main');
  mainElement.classList.add('main-content');
  bodyElement.appendChild(mainElement);
}
// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const addSectionMainChild = () => {
  const mainElement = document.querySelector('.main-content');
  const sectionMain = document.createElement('section');
  sectionMain.classList.add('center-content');
  mainElement.appendChild(sectionMain);
}
// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const addParagraphSectionMain = () => {
  const sectionMain = document.querySelector('.center-content');
  const paragraph = document.createElement('p');
  paragraph.innerText = 'Agencia de viagens top';
  sectionMain.appendChild(paragraph)
}
// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const addSection2Main = () => {
  const mainElement = document.querySelector('.main-content');
  const section2 = document.createElement('section');
  section2.classList.add('left-content');
  mainElement.appendChild(section2);
}
// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const addSection3Main = () => {
  const mainElement = document.querySelector('.main-content');
  const section2 = document.createElement('section');
  section2.classList.add('right-content');
  mainElement.appendChild(section2);
}
// Adicione uma imagem com src configurado para valor https://picsum.photos/200 e classe small-image. 
// Esse elemento deve ser filho do section criado no passo 5;
const addImage = () => {
  const sectionLeft = document.querySelector('.left-content');
  const imgElement = document.createElement('img');
  imgElement.src = 'https://picsum.photos/200';
  imgElement.classList.add('small-image');

  sectionLeft.appendChild(imgElement);
}
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, e assim por diante. 
// Essa lista deve ser filha do section criado no passo 6;
const addUnorderedList = () => {
  const arrayNumExtenso = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
  const sectionRight = document.querySelector('.right-content');
  const ulElement = document.createElement('ul');
  
  
  for (let value of arrayNumExtenso) {
    // const ulElement2 = document.querySelector('.right-content ul')
    const liElement = document.createElement('li');
    liElement.innerText = value;
    ulElement.appendChild(liElement);
  }

  sectionRight.appendChild(ulElement);
}
// Adicione 3 tags h3, todas filhas do main criado no passo 2. main-content
const add3Tagsh3 = () => {
  const mainContent = document.querySelector('.main-content');
  for (let index = 0; index < 3; index += 1) {
    const h3Element = document.createElement('h3');
    h3Element.innerText = `Essa e a H3 número ${index+1}`;
    mainContent.appendChild(h3Element);
  }
}

addH1();
addMain();
addSectionMainChild();
addParagraphSectionMain();
addSection2Main();
addSection3Main();
addImage();
addUnorderedList();
add3Tagsh3();

// Adicione a classe title na tag h1 criada;
const addClassH1 = () => {
  const h1Element = document.querySelector('h1');
  h1Element.classList.add('title')
}
// Adicione a classe description nas 3 tags h3 criadas;
const addClassH3 = () => {
  const h3Elements = document.querySelectorAll('h3');
  for (let index = 0; index < h3Elements.length; index += 1) {
    h3Elements[index].classList.add('description')
  }
}

// Remova a section criada no passo 5 (aquela que possui a classe left-content) por meio da função .removeChild();
const removeSectionLeft = () => {
  const sectionLeft = document.querySelector('.left-content');
  const mainElement = document.querySelector('.main-content');
  mainElement.removeChild(sectionLeft);
  // sectionLeft.remove()
}
// Centralize a section criada no passo 6 (aquela que possui a classe right-content).
const alignSection = () => {
  const sectionRight = document.querySelector('.right-content');
  sectionRight.classList.remove('right-content')
  sectionRight.classList.add('center');

}

// Troque a cor de fundo do elemento-pai da section criada no passo 3 (aquela que possui a classe center-content) 
// para a cor verde;
const paiCenterContent = () => {
  const paiCenter = document.querySelector('.center-content').parentElement;
  paiCenter.style.backgroundColor = 'green';
}
// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
const removeDoisUltimosElementos = () => {
  const ulElement = document.querySelector('ul');
  ulElement.lastElementChild.remove();
  ulElement.lastElementChild.remove();
}

addClassH1();
addClassH3();
removeSectionLeft();
alignSection();
paiCenterContent();
removeDoisUltimosElementos();