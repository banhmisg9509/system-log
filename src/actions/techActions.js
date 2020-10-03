import { techsAPI } from 'api';
import {
  ADD_TECH,
  GET_TECHS,
  SET_LOADING,
  TECHS_ERRORS,
} from 'types';

export const getTechs = () => async (dispatch) => {
  try {
    dispatch(setLoading());

    const techs = await techsAPI.getTechs();
    dispatch({ type: GET_TECHS, payload: techs });
  } catch (error) {
    dispatch({ type: TECHS_ERRORS, payload: error.response.statusText });
  }
};

export const addTech = (tech) => async (dispatch) => {
  try {
    const data = await techsAPI.addTech(tech);
    dispatch({ type: ADD_TECH, payload: data });
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
