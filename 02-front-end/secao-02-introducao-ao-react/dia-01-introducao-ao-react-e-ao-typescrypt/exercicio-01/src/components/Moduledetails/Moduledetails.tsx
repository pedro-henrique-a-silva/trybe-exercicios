function Moduledetails() {
  const modulesList = [
    'introducao-frontend-e-javascript-assincrono',
    'introducao-ao-react',
    'aprofundando-react',
    'testes-automatizados-com-react-testing-library',
    'estilizacao-e-metodologia-agil',
    'gerenciamento-de-estado-com-redux',
    'projeto-jogo-de-trivia',
    'context-api-e-react-hooks',
    'projeto-app-de-receitas'];

  return (
    <ul>
      {modulesList.map((module) => <li key={ modulesList.indexOf(module) }>{module}</li>)}
    </ul>
  );
}

export default Moduledetails;
