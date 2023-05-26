const form = document.querySelector('#main-form');
const inputName = document.querySelector('#fullName');
const inputEmail = document.querySelector('#email');
const inputQuestion = document.querySelector('#question');
const inputDate = document.querySelector('#date');
const inputPromo = document.querySelector('#promo');
const inputAgreement = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const btnClear = document.querySelector('#clear-btn');

// const validate = new JustValidate(
//   '#main-form',
//   {
//     errorFieldCssClass: 'is-invalid',
//     errorFieldStyle: {
//       border: '1px solid red',
//     },
//     errorLabelCssClass: 'is-label-invalid',
//     errorLabelStyle: {
//       color: 'red',
//       textDecoration: 'underlined',
//     },
//     focusInvalidField: true,
//     lockForm: true,
//     tooltip: {
//       position: 'top',
//     },
//   },
// );

// validate
//   .addField('#fullName', [
//     {
//       rule: 'required',
//       errorMessage: 'O campo de nome é obrigatório.',
//     },
//     {
//       rule: 'maxLength',
//       value: 40,
//       errorMessage: 'O limite é de 40 caracteres.',
//     },
//     {
//       rule: 'minLength',
//       value: 10,
//       errorMessage: 'O mínimo é de 10 caracteres.',
//     },
//   ])
//   .addField('#email', [
//     {
//       rule: 'required',
//       errorMessage: 'O campo de email é obrigatório.',
//     },
//     {
//       rule: 'email',
//       errorMessage: 'O email digitado não é válido.',
//     },
//     {
//       rule: 'maxLength',
//       value: 50,
//       errorMessage: 'O limite é de 50 caracteres.',
//     },
//   ])
//   .addField('#question', [
//     {
//       rule: 'required',
//       errorMessage: 'O campo de resposta é obrigatório.',
//     },
//     {
//       rule: 'maxLength',
//       value: 500,
//       errorMessage: 'O limite é de 500 caracteres',
//     },
//   ])
//   .addField('#date', [
//     {
//       rule: 'required',
//       errorMessage: 'O campo de data é obrigatório.',
//     },
//   ]);

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