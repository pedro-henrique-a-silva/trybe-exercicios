const verificaNumero = (n1, n2, n3, n4) => {
  if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
    throw new Error('Por favor informe Números valídos.')
  }
}


const mediaNota = (n1, n2, n3, n4) => {
  const somaNota = n1 + n2 + n3 + n4;
  const mediaNota = somaNota / 4;
  return mediaNota;
}


const checaNota = (n1, n2, n3, n4) => {
  const nota1 = Number(n1);
  const nota2 = Number(n2);
  const nota3 = Number(n3);
  const nota4 = Number(n4);
  try {
    verificaNumero(Number(nota1), nota2, nota3, nota4);
    console.log(mediaNota(nota1, nota2, nota3, nota4));
  } catch (error) {
    console.log(error.message);
  }
}

checaNota(5, 4, 6, 'a');
