import { logsAPI } from 'api';
import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
} from 'types';

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const logs = await logsAPI.getLogs();
    dispatch({ type: GET_LOGS, payload: logs });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data });
  }
};

export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const data = await logsAPI.addLog(log);
    dispatch({ type: ADD_LOG, payload: data });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data });
  }
};

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    await logsAPI.deleteLog(id);
    dispatch({ type: DELETE_LOG, payload: id });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data });
  }
};

export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const data = await logsAPI.updateLog(log);
    dispatch({ type: UPDATE_LOG, payload: data });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data });
  }
};

export const setCurrent = (log) => {
  return { type: SET_CURRENT, payload: log };
};

export const clearCurrent = () => {
  return { type: CLEAR_CURRENT };
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
