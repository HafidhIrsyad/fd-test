import { combineReducers } from 'redux';
import { FAILED, FETCH, LOADING } from './type';

export const initialState = {
  counter: 1,
  movie: [],
  isLoading: false,
  error: null,
}

export const reducer = (state=initialState, action) => {
  const { data, error } = action;

  switch (action.type) {
    case FAILED:
    return {
      ...state,
      isLoading: false,
      ...error
    }
    case LOADING:
    return {
      ...state,
      isLoading: true
    }
    case FETCH:
    return {
      ...state,
      isLoading: false,
      ...data,
    }
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  movies: reducer
})