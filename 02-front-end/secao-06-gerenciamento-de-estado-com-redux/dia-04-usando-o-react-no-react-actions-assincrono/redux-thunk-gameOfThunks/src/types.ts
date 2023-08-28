import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type CharactersData = {
  name: string,
  gender: string,
  culture: string,
  born: string,
}

export type ReduxState = {
  isFetching: boolean,
  charData: CharactersData,
  errorMessage: string,
};



export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;