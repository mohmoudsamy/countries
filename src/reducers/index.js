import { combineReducers } from "redux";

const countries = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL":
      return action.payload;
    default:
      return state;
  }
};

const country = (state = [], action) => {
  switch (action.type) {
    case "GET_COUNTRY":
      return action.payload;
    default:
      return state;
  }
};

const countryDetails = (state = [], action) => {
  switch (action.type) {
    case "GET_COUNTRY_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

const region = (state = "", action) => {
  switch (action.type) {
    case "REGION":
      return action.payload;
    default:
      return state;
  }
};

const reducers = combineReducers({
  countries,
  country,
  countryDetails,
  region,
});
export default reducers;
