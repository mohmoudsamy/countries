import axios from "axios";
const GET_ALL = "GET_ALL";
const GET_COUNTRY = "GET_COUNTRY";
const GET_COUNTRY_DETAILS = "GET_COUNTRY_DETAILS";

export const getAllCountries = () => async (dispatch) => {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  dispatch({ type: GET_ALL, payload: response.data });
};

export const getCountry = (countryName) => async (dispatch) => {
  const response = await axios.get(
    `https://restcountries.com/v3.1/name/${countryName}`
  );
  dispatch({ type: GET_COUNTRY, payload: response.data });
};

export const getCountryDetails = (countryNameDetails) => async (dispatch) => {
  const response = await axios.get(
    `https://restcountries.com/v3.1/name/${countryNameDetails}`
  );
  dispatch({ type: GET_COUNTRY_DETAILS, payload: response.data });
};
