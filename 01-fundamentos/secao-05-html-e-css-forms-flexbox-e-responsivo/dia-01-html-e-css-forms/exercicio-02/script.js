// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

const preventHref = () => {
  hrefLink.addEventListener('click', (event) => {
    event.preventDefault();
  });
};

const preventCheckBox = () => {
  inputCheckbox.addEventListener('click', (event) => {
    event.preventDefault();
  });
};

const preventText = () => {
  inputText.addEventListener('keypress', (event) => {
    event.preventDefault();
  })
}
preventHref();
preventCheckBox();
preventText();