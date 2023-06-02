const studentRegister = (name, age) => {
  // seu código aqui

  if (!name || !age) {
    throw new Error('Todas as informações são necessárias');
  }

  if (age < 18) {
    throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
  }

  return `${name}, seja bem-vindo(a) à AuTrybe!`
}

try {
  console.log(studentRegister('pedro',19));
} catch (error) {
  console.log(error.message);
}