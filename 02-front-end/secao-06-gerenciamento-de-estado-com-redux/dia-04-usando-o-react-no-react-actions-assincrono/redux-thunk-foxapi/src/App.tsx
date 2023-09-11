
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {fetchApi} from './redux/actions'
import { Dispatch, ReduxState } from './types'

function App() {
  const foxData = useSelector((state: ReduxState) => state)
  const dispatch: Dispatch = useDispatch()


  if (foxData.isFetching) return <div>Carregando...</div>


  return (
    <div>
      <button
        onClick={() => dispatch(fetchApi())}
      >
        realizar fetch
      </button>
      {(foxData.imageURL && (
        <img src={foxData.imageURL} alt="fox image" />
      ))}
    </div>
  )
}

export default App
