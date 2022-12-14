import axios from "axios";
import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  FILTER_BY_TEMPERAMENTS,
  FILTER_BY_ORIGIN,
  SORT_BY_NAME,
  SORT_BY_WEIGHT,
} from "./actionsCreator";

export const getDogs = () => {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/dogs");
    return dispatch({
      type: GET_DOGS,
      payload: json.data,
    });
  };
};

export const getTemperaments = () => {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/temperaments");
    return dispatch({
      type: GET_TEMPERAMENTS,
      payload: json.data,
    });
  };
};

export const filterByTemperaments = (payload) => {
  return {
    type: FILTER_BY_TEMPERAMENTS,
    payload,
  };
};

export const filterByOrigin = (payload) => {
  return {
    type: FILTER_BY_ORIGIN,
    payload,
  };
};

export const sortByName = (payload) => {
  return {
    type: SORT_BY_NAME,
    payload,
  };
};

export const sortByWeight = (payload) => {
  return {
    type: SORT_BY_WEIGHT,
    payload,
  };
};
