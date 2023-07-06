import './style.css';

const btnRandomDog = document.querySelector('#dog');
const btnRandomCat = document.querySelector('#cat');
const btnRandom = document.querySelector('#random');
const mainContent = document.querySelector('.main-content');

const catAPI = 'https://api.thecatapi.com/v1/images/search';
const dogAPI = 'https://dog.ceo/api/breeds/image/random';

const randomNumber = () => Math.floor(Math.random() * (2));

const createImgElement = (imgLink) => {
  mainContent.innerHTML = '';

  const imageEl = document.createElement('img');
  imageEl.src = imgLink;
  imageEl.classList.add('image');

  mainContent.appendChild(imageEl);
};

const getRandomDog = () => {
  fetch(dogAPI)
    .then((response) => response.json())
    .then(({ message }) => {
      createImgElement(message);
    })
    .catch((error) => error);
};

const getRandomCat = () => {
  fetch(catAPI)
    .then((response) => response.json())
    .then((data) => {
      const { url } = data[0];
      createImgElement(url);
    })
    .catch((error) => error);
};

const getRandomPet = () => {
  const petFunctions = [getRandomDog, getRandomCat];
  petFunctions[randomNumber()]();
};

btnRandomDog.addEventListener('click', getRandomDog);
btnRandomCat.addEventListener('click', getRandomCat);
btnRandom.addEventListener('click', getRandomPet);
