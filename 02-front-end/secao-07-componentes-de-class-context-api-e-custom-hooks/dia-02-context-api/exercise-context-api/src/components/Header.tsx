import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

function Headers() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  
  return (
    <header>
      <h1>Context API</h1>
      <button onClick={() => toggleTheme()}>
        {(theme === 'light') ? 'dark' : 'light'}
      </button>
    </header>
  )
}

export default Headers