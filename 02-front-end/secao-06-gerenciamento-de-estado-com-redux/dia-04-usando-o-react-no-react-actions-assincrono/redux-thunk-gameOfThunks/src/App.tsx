import { useDispatch, useSelector } from 'react-redux'
import {fetchApi} from './redux/actions'
import { Dispatch, ReduxState } from './types'
import './App.css'
import { useState } from 'react'

function App() {
  const [searchInput, setSearchInput] = useState('')
  const charData = useSelector((state: ReduxState) => state)
  const dispatch: Dispatch = useDispatch()

  console.log(charData);
  
  if (charData.isFetching) return <div>Carregando...</div>

  return (
    <>
      <div>
        <input 
          type="text" 
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button
          onClick={() => dispatch(fetchApi(searchInput))}
        >
          realizar fetch
        </button>
        {(charData.charData.name && (
          <>
            <p>{charData.charData.name}</p>
            <p>{charData.charData.gender}</p>
            <p>{charData.charData.born}</p>
          </>
        ))}
      </div>
    
    </>
  )
}

export default App
