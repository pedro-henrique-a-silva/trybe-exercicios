import Swal from 'sweetalert2';
import './style.css';

const mainContent = document.querySelector('main');
const buttonSort = document.querySelector('button');

const randomNumber = (number) => Math.floor(Math.random() * (number));
const numberOfSuperHeros = 731;

const getRandomHero = () => {
  const randomId = randomNumber(numberOfSuperHeros);
  const heroData = fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${randomId}.json`)
    .then((response) => response.json())
    .then(({ name, images }) => {
      // name, images;
      const imageEl = document.createElement('img');
      const paragraphEl = document.createElement('p');

      imageEl.src = images.md;
      mainContent.insertAdjacentHTML('afterbegin', imageEl.outerHTML);
      paragraphEl.innerHTML = name;
      mainContent.insertAdjacentHTML('beforeend', paragraphEl.outerHTML);
    })
    .catch((error) => Swal.fire({
      title: 'Error!',
      text: `SuperHero Não encontrado Error: ${error}`,
      icon: 'error',
      confirmButtonText: 'Tente outra vez',
    }));

  return heroData;
};

buttonSort.addEventListener('click', () => {
  mainContent.innerHTML = '';
  getRandomHero();
});
