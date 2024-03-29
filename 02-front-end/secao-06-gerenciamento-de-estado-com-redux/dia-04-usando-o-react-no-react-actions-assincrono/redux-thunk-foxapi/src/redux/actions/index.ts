import { Dispatch } from "../../types";

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export function requestStarted() {
  return { type: REQUEST_STARTED };
}

export function requestSuccessful(imageURL: string) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: imageURL,
  };
}

export function requestFailed(error: string) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

export function fetchApi() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestStarted());
      const response = await fetch('https://randomfox.ca/floof/');
      const data = await response.json();
      dispatch(requestSuccessful(data.image));
    } catch (error: any) {
      dispatch(requestFailed(error.message));
    }
  };
}