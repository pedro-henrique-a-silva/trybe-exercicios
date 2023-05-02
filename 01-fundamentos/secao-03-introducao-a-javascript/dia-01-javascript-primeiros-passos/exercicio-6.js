let personStatus = 'aprovado';

switch (personStatus) {
  case 'aprovado':
  case 'aprovada':
    console.log('Parabéns, você está no grupo de pessoas aprovadas!');
    break;
  case 'lista':
    console.log('Você está na lista de espera.');
    break;
  case 'reprovado':
  case 'reprovada':
    console.log('Infelizmente, você reprovou.');
    break;
  default:
    console.log('Informação incorreta');
    break;
}
