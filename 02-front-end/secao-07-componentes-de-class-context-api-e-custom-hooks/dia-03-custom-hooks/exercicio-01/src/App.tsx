import './App.css'
import Form from './components/Form'
import useToggle from './hooks/useToggle'

function App() {
  const toggle = useToggle(true)

  if (toggle.toggle === true) {
    return (
      <div className='container'>
        <button 
          onClick={toggle.handleToggle}
        >
          Preencher Formulario
        </button>
      </div>
    )
  }


  return (
    <div className='container'>
      <Form handleToggle={toggle.handleToggle}/>
    </div>
  )
}

export default App
