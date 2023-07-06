import validator from 'validator';
import './style.css';

const selectEl = document.querySelector('select');
const textToValidateEl = document.querySelector('#text-to-validate');
const buttonValidateEl = document.querySelector('button');
const textResult = document.querySelector('p');

const getValidation = (element) => element.options[element.selectedIndex].value;

buttonValidateEl.addEventListener('click', () => {
  const validationSelected = getValidation(selectEl);
  if (validationSelected === 'valida-email') {
    const resultValidation = validator.isEmail(textToValidateEl.value);
    textResult.innerHTML = `O resultado da validação é ${resultValidation}`;
  }

  if (validationSelected === 'valida-data') {
    const resultValidation = validator.isDate(textToValidateEl.value);
    textResult.innerHTML = `O resultado da validação é ${resultValidation}`;
  }

  if (validationSelected === 'valida-hexcolor') {
    const resultValidation = validator.isHexColor(textToValidateEl.value);
    textResult.innerHTML = `O resultado da validação é ${resultValidation}`;
  }

  if (validationSelected === 'valida-cpf') {
    const resultValidation = validator.isTaxID(textToValidateEl.value, 'pt-BR');
    textResult.innerHTML = `O resultado da validação é ${resultValidation}`;
  }
});
