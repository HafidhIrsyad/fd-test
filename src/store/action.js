import { getAllData } from '../service/service';
import { FAILED, FETCH, LOADING } from './type'

export const getMovie = () => {
  return async (dispatch) => {
    dispatch(loadingAction())
    try {
      const data = await getAllData();
      dispatch(fetchAction({ movie: data }))
    } catch(err) {
      if(err.code === 404) {
        dispatch(fetchAction({ movie: [] }));
      }
      dispatch(loadingAction(err));
    }
  }
}

export const fetchAction = (data) => ({ type: FETCH, data });
export const loadingAction = () => ({ type: LOADING });
export const failedAction = payload => ({ type: FAILED, payload });

