const inputTexto = document.querySelector('#text-input');
const memeImageContainer = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');
const form = document.querySelector('form');

const memeImage = document.querySelector('#meme-image');

const escreveTextoNoMeme = () => {
  inputTexto.addEventListener('keyup', () => {
    memeText.innerHTML = inputTexto.value;
  });
};

const uploadImageToPreview = () => {
  const memeInsert = document.querySelector('#meme-insert');
  memeInsert.addEventListener('change', (event) => {
    const image = event.target.files[0];
    memeImage.src = URL.createObjectURL(image);
    memeImageContainer.style.height = memeImage.style.height;
  });
};

const changeMemeBorder = (elementID) => {
  switch (elementID) {
  case 'fire':
    memeImageContainer.style.border = '3px dashed rgb(255, 0, 0)';
    break;
  case 'water':
    memeImageContainer.style.border = '5px double rgb(0, 0, 255)';
    break;
  case 'earth':
    memeImageContainer.style.border = '6px groove rgb(0, 128, 0)';
    break;
  default:
    break;
  }
};

const changeMemeFoto = (elementID) => {
  const urlFoto = document.querySelector(`#${elementID}`).src;
  switch (elementID) {
  case 'meme-1':
    memeImage.src = urlFoto;
    break;
  case 'meme-2':
    memeImage.src = urlFoto;
    break;
  case 'meme-3':
    memeImage.src = urlFoto;
    break;
  case 'meme-4':
    memeImage.src = urlFoto;
    break;
  default:
    break;
  }
};

const buttonsEvent = () => {
  form.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.tagName === 'BUTTON') {
      changeMemeBorder(event.target.id);
    }

    if (event.target.tagName === 'IMG') {
      changeMemeFoto(event.target.id);
    }
  });
};

escreveTextoNoMeme();
uploadImageToPreview();
buttonsEvent();
