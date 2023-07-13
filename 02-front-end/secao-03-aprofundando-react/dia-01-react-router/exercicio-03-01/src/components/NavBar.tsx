import { NavLink } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/coffees">Cafés</NavLink>
      <NavLink to="/coffee">Café</NavLink>
    </nav>
  )
}

export default NavBar;