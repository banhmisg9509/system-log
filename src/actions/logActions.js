import { logsAPI } from 'api';
import { GET_LOGS, SET_LOADING, LOGS_ERROR } from 'types';

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const logs = await logsAPI.getLogs();
    dispatch({ type: GET_LOGS, payload: logs });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data });
  }
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
