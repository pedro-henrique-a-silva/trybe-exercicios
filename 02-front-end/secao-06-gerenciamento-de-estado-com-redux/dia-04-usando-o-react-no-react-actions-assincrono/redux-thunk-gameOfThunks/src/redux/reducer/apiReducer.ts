import { AnyAction } from 'redux';
import { REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED } from '../actions';

const initialState = {
  isFetching: false,
  charData: {},
  errorMessage: '',
};



function dogReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        errorMessage: '',
        charData: {},
      };

    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        charData: {...action.payload},
        errorMessage: '',
      };

    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
        charData: {},
      };

    default:
      return state;
  }
}

export default dogReducer;