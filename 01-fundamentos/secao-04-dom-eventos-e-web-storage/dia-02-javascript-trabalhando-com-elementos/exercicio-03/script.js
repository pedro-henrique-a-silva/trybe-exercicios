const criaIrmao = () => {
  const pai = document.getElementById('pai');
  const filho = document.createElement('section')
  filho.id = 'irmaoDeElementoOndeEuEstou';

  pai.appendChild(filho);

};

const criaFilho = () => {
  const pai = document.getElementById('elementoOndeVoceEsta');
  const filho = document.createElement('section')
  filho.id = 'filhoDeElementoOndeEuEstou';

  pai.appendChild(filho);

};
const criaFilhoDoFilho = () => {
  const pai = document.getElementById('primeiroFilhoDoFilho');
  const filho = document.createElement('div')
  filho.id = 'filhoDoFilhoDoFilho';

  pai.appendChild(filho);

};

const acessandoTio = () => {
  const tio = document.getElementById('filhoDoFilhoDoFilho')
              .parentElement
              .parentElement
              .nextElementSibling;
  console.log(tio);

};

criaIrmao();
criaFilho();
criaFilhoDoFilho();
acessandoTio();