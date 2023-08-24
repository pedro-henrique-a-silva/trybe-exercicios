import './App.css'
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  return (
    <>
      <label>
        Nome:
        <input value={ name } onChange={ (event) => setName(event.target.value) } />
      </label>
      <button onClick={ () => setName('') }>Apagar!</button>
      <h1>Olá, { name }!</h1>
    </>
  );
}

export default App;

