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
    if (!inputAgreement.checked) alert('Aceite os temos de direito de imagem');
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
      btnSubmit.classList.remove('btn-secondary');
      btnSubmit.classList.add('btn-primary')
    } else {
      btnSubmit.setAttribute('disabled', false);
      btnSubmit.classList.add('btn-secondary')
      btnSubmit.classList.remove('btn-primary');
    }
  });
};

const validateUsingJustValidate = () => {
  const validate = new window.JustValidate('#main-form');

  validate
  .addField('#fullName', [
    {
      rule: 'required',
      errorMessage: 'Você precisa Informar seu nome completo',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Nome Incorreto',
    },
    {
      rule: 'maxLength',
      value: 20,
      errorMessage: 'Nome Incorreto',
    },
    
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email incorreto',
    },
    {
      rule: 'email',
      errorMessage: 'Email incorreto',
    }
  ])
  .addRequiredGroup(
    '#destino-preferido',
    'Você deve selecionar um destino preferido'
    )
}


window.onload = () => {
  formEvent();
  btnClearEvent();
  agreementsEvent();
  validateUsingJustValidate();
}