import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from './redux/actions';

import './App.css'

type RootState = {
  counterReducer: {
    count: number;
    clicks: number;
  }
};

function App() {
  const rootState = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Contador</h1>
      <p>{rootState.counterReducer.count}</p>
      <button onClick={() => dispatch(actionCreator(1))}>incrementa 1</button>
      <button onClick={() => dispatch(actionCreator(5))}>incrementa 5</button>
    </>
  )
}

export default App
