import { useState, useEffect } from 'react'
import {fetchCoordinates} from './services'
import {PosISSType} from './types'
import './App.css'

// const InitialPos = {
//   latitude: 0,
//   longitude: 0
// }

function App() {
  const [posISS, setPosISS] = useState<PosISSType>()

  useEffect(() => {
    console.log('executando');

    const intervalId = setInterval(() => {
      fetchCoordinates()
      .then((data) => {
        setPosISS({ latitude: data.latitude, longitude: data.longitude });
      })
      .catch((error) => {
        console.log('erro no fetch');
        
      })
    }, 3000);

    return () => {
      clearInterval(intervalId)
    };
   
  },[])

  return (
    <>
      <h1>Ola mundo </h1>

      {posISS && (
      <>
        <h2>{`Latitude: ${posISS.latitude}`}</h2>
        <h2>{`Longitude: ${posISS.longitude}`}</h2>
      </>
    )}
    </>
  )
}

export default App
