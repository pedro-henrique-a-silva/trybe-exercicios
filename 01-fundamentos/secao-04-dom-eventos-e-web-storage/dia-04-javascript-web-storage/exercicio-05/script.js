const changeBackgroundColor = () => {
  const buttons = document.querySelectorAll('#background-color button');
  const mainElement = document.querySelector('main')

  for (let index = 0; index < buttons.length; index += 1) {
    buttons[index].addEventListener('click', (event) => {
      mainElement.style.backgroundColor = event.target.innerHTML;
      localStorage.setItem('backgroundColor', event.target.innerHTML)
    })
  }
}

const changeFontColor = () => {
  const buttons = document.querySelectorAll('#font-color button');
  const mainElement = document.querySelector('main');

  for (let index = 0; index < buttons.length; index += 1) {
    buttons[index].addEventListener('click', (event) => {
      mainElement.style.color = event.target.innerHTML;
      localStorage.setItem('fontColor', event.target.innerHTML)
    })
  }
}

const changeFontSize = () => {
  const buttons = document.querySelectorAll('#font-size button');
  const mainElement = document.querySelector('main');

  for (let index = 0; index < buttons.length; index += 1) {
    buttons[index].addEventListener('click', (event) => {
      mainElement.style.fontSize = event.target.innerHTML;
      localStorage.setItem('fontSize', event.target.innerHTML)
    })
  }
}


const changeLineHight = () => {
  const buttons = document.querySelectorAll('#line-height button');
  const mainElement = document.querySelector('main');

  for (let index = 0; index < buttons.length; index += 1) {
    buttons[index].addEventListener('click', (event) => {
      mainElement.style.lineHeight = event.target.innerHTML;
      localStorage.setItem('lineHight', event.target.innerHTML)
    })
  }
}

const changeFontType = () => {
  const buttons = document.querySelectorAll('#font-family button');
  const mainElement = document.querySelector('main');

  for (let index = 0; index < buttons.length; index += 1) {
    buttons[index].addEventListener('click', (event) => {
      mainElement.style.fontFamily = event.target.innerHTML;
      localStorage.setItem('FontFamily', event.target.innerHTML)
    })
  }
}

const configInicial = () => {
  const mainElement = document.querySelector('main');

  const localBackgroundColor = localStorage.getItem('backgroundColor');
  if (localBackgroundColor) {
    mainElement.style.backgroundColor = localBackgroundColor;
    console.log(localBackgroundColor);
  }

  const localFontColor = localStorage.getItem('fontColor');
  if (localFontColor) {
    mainElement.style.color = localFontColor;
    console.log(localFontColor);
  }

  const localFontSize = localStorage.getItem('fontSize');
  if (localFontSize) {
    mainElement.style.fontSize = localFontSize;
    console.log(localFontSize);
  }
  const localLineHight = localStorage.getItem('lineHight');
  if (localLineHight) {
    mainElement.style.lineHeight = localLineHight;
  }
  const localFontFamily = localStorage.getItem('FontFamily');
  if (localFontFamily) {
    mainElement.style.fontFamily = localFontFamily;
  }
}

window.onload = () => {
  configInicial();
  changeBackgroundColor();
  changeFontColor();
  changeFontSize();
  changeLineHight();
  changeFontType();

}