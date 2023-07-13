import { Link } from "react-router-dom";



function NotFound() {
  return (
    <>
      <h1>Oops! Página não encontrada</h1>
      <h2>Desculpe, a página que você está procurando não existe.</h2>
      {/* Ao clicar nesse link, voltaremos para a rota home
      , a rota home recebera por sua vez a informação passada para 
      a prop state e em home podemos pegar essa informação usando o hook
      useLocation do react-router-dom */}
      <Link to="/" state={{ infosThroughRoute: "Miguel" }}>
        <h3>Voltar à página inicial</h3>
      </Link>
    </>
  )
}

export default NotFound;
