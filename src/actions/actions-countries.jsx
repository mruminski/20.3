export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const DELETE_COUNTRY = "DELETE_COUNTRY";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const SET_CONTINENT = "SET_CONTINENT";

export function getCountries() {
  return {
    type: GET_COUNTRIES
  };
}

export function getCountry(id) {
  return {
    type: GET_COUNTRY,
    id
  };
}

export function deleteCountry(id) {
  return {
    type: DELETE_COUNTRY,
    id
  };
}

export function searchCountries(text) {
  return {
    type: SEARCH_COUNTRIES,
    text
  };
}

export function setContinent(text) {
  return {
    type: SET_CONTINENT,
    text
  };
}
