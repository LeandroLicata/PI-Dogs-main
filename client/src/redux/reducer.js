import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  SORT_BY_NAME,
  SORT_BY_WEIGHT,
  FILTER_BY_TEMPERAMENTS,
  FILTER_BY_ORIGIN,
} from "./actionsCreator";

const initialState = {
  dogs: [],
  temperaments: [],
  allDogs: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case SORT_BY_NAME:
      let sortedArray =
        action.payload === "a-z"
          ? state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sortedArray,
      };
    case SORT_BY_WEIGHT:
      let sortedArray2 =
        action.payload === "heavier"
          ? state.dogs.sort(function (a, b) {
              return b.weight[0] - a.weight[0];
            })
          : state.dogs.sort(function (a, b) {
              return a.weight[0] - b.weight[0];
            });
      return {
        ...state,
        dogs: sortedArray2,
      };
    case FILTER_BY_TEMPERAMENTS:
      const allDogs = state.allDogs;
      const filteredDogs =
        action.payload === "all temperaments"
          ? allDogs
          : allDogs.filter(
              (d) =>
                d.temperament?.find((t) => t === action.payload) ===
                action.payload
            );
      return {
        ...state,
        dogs: filteredDogs,
      };
    case FILTER_BY_ORIGIN:
      const allDogs2 = state.allDogs;
      const filteredDogs2 =
        action.payload === "all breeds"
          ? allDogs2
          : allDogs2.filter((d) => d.origin === action.payload);
      return {
        ...state,
        dogs: filteredDogs2,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
