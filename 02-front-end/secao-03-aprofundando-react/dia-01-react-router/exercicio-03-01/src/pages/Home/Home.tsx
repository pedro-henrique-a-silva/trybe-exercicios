import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleClick = () =>  {
    navigate('/coffees')
  }

  return (
    <>
      <h1>Home page</h1>
      {/* O componente <Link /> do react-router-dom não recebe apenas texto entre
      suas tags (como children) mais pode receber também 
      outros elementos html ou componentes como um button */}
      {/* <Link to="/coffees">
        <button> Conheça nossos produtos </button>
      </Link> */}

      {/* não é acomselhaveu o uso de butões dentro do Componente <Link /> 
      pois dessa forma criamos dois elementos clicaveis, então uma coisa que
      podemos fazer para resolver esse problema e usar o hook "useNavigate" */}
    <button onClick={ handleClick }>Entrar</button>
    </>
  )
}

export default Home