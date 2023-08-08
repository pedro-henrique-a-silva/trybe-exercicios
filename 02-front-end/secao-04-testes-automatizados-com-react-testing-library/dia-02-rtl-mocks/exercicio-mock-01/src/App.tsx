// App.tsx
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState('');

  async function fetchJoke() {
    const API_URL = 'https://icanhazdadjoke.com/';
    const REQUEST_CONFIG = { headers: { Accept: 'application/json' } };
    const response = await fetch(API_URL, REQUEST_CONFIG);
    const data = await response.json();
    setJoke(data.joke)
  }

  const handleNewJoke = () => {
    fetchJoke();
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="App">
      <p>{joke}</p>
      <button onClick={handleNewJoke}>New Joke</button>
    </div>
  );
}

export default App;