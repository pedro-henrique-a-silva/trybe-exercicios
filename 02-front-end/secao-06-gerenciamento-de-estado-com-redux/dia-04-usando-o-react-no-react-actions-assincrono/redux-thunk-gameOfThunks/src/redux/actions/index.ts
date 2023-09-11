import { Dispatch, CharactersData } from "../../types";

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export function requestStarted() {
  return { type: REQUEST_STARTED };
}

export function requestSuccessful(charData: CharactersData) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: charData,
  };
}

export function requestFailed(error: string) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

export function fetchApi(charName: string) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestStarted());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${charName}`);
      const data = await response.json();
      dispatch(requestSuccessful(data[0]));
    } catch (error: any) {
      dispatch(requestFailed(error.message));
    }
  };
}