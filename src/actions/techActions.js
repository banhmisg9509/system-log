import { techsAPI } from 'api';
import {
  GET_TECHS,
  SET_LOADING,
  TECHS_ERRORS,
} from 'types';

export const getTechs = () => async (dispatch) => {
  try {
    dispatch(setLoading());

    const logs = await techsAPI.getTechs();
    dispatch({ type: GET_TECHS, payload: logs });
  } catch (error) {
    dispatch({ type: TECHS_ERRORS, payload: error.response.statusText });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
