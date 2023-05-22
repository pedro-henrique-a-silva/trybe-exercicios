const form = document.querySelector('#main-form');
const inputName = document.querySelector('#fullName');
const inputEmail = document.querySelector('#email');
const inputQuestion = document.querySelector('#question');
const inputDate = document.querySelector('#date');
const inputPromo = document.querySelector('#promo');
const inputAgreement = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const btnClear = document.querySelector('#clear-btn');

const formEvent = () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!event.target.checked) alert('Aceite os temos de direito de imagem');
  });
};

const btnClearEvent = () => {
  btnClear.addEventListener('click', (event) => {
    inputName.value = '';
    inputEmail.value = '';
    inputQuestion.value = '';
    inputDate.value = '';
    inputPromo.checked = false;
    inputAgreement.checked = false;
  });
};

const agreementsEvent = () => {
  inputAgreement.addEventListener('click', (event) => {
    if (event.target.checked) {
      btnSubmit.removeAttribute('disabled');
    } else {
      btnSubmit.setAttribute('disabled', false);
    }
  });
};

formEvent();
btnClearEvent();
agreementsEvent();