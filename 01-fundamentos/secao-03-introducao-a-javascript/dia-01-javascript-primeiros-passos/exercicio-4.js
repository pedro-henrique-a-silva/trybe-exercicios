let currentHour = 2;
let message = "";


if ((currentHour >= 22) && (currentHour <= 24)){
  message = "Não deveriamos comer nada, é hora de dormir"
}else if ((currentHour >= 18) && (currentHour < 22)){
  message = "Rando da noite, vamos jantar :D"
}else if ((currentHour >= 14) && (currentHour < 18)) {
  message = "Vamos fazer um bolo pro café da tarde?"
}else if ((currentHour >= 11) && (currentHour < 14)) {
  message = "Hora do almoço!!!"
}else if ((currentHour >= 4) && (currentHour < 11)){
  message = "Hmmm, cheiro de café recém-passado"
}else{
  message = "Você deveria estar dormindo."
}

console.log(message)