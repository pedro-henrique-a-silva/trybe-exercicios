const emergencyTaskTitle = document.querySelectorAll('.emergency-tasks div h3');
const noEmergencyTaskTitle = document.querySelectorAll('.no-emergency-tasks div h3');
const section1 = document.querySelector('.emergency-tasks');
const section2 = document.querySelector('.no-emergency-tasks');

for (let index = 0; index < emergencyTaskTitle.length; index += 1 ) {
  emergencyTaskTitle[index].style.backgroundColor = 'purple';
}

for (let index = 0; index < noEmergencyTaskTitle.length; index += 1 ) {
  noEmergencyTaskTitle[index].style.backgroundColor = 'black';
}

section1.style.backgroundColor = 'pink';
section2.style.backgroundColor = 'yellow';

document.getElementById('header-container').style.backgroundColor = 'green';
document.getElementById('footer-container').style.backgroundColor = 'green';