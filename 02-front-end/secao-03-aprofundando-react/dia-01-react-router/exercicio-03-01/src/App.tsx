import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import CoffeeList from './pages/CoffeeList/CoffeeList';
import Coffee from './pages/Coffee/Coffee';
// import NavBar from './components/NavBar';
import NotFound from './pages/NotFound/NotFound';
import Layout from './components/Layout';


function App() {
 
  return (
  <>
    <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="/coffees" element={ <CoffeeList /> } />
          <Route path="/coffee/:coffee" element={ <Coffee /> } />
        </Route>
        <Route path="/*" element={ <NotFound /> } />
    </Routes>
  </>
  )
}

export default App;