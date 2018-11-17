import {
  GET_COUNTRIES,
  GET_COUNTRY,
  SEARCH_COUNTRIES,
  DELETE_COUNTRY,
  SET_CONTINENT
} from "../actions/actions-countries";
import countriesDB from "../data/countries.json";

const initialState = {
  countries: countriesDB,
  selectedCountry: {},
  visibleCountries: []
};

const countriesReducer = function(state = initialState, action) {
  // eslint-disable-next-line
  switch (action.type) {
    case GET_COUNTRIES:
      return Object.assign({}, state, { countries: state.countries });
    case GET_COUNTRY:
      const selectedCountry = state.countries.find(
        country => country.id === parseInt(action.id)
      );
      return Object.assign({}, state, { selectedCountry });
    case SEARCH_COUNTRIES:
      const foundedCountries = state.countries.filter(country =>
        country.name.toLowerCase().includes(action.text.toLowerCase())
      );
      return Object.assign({}, state, { visibleCountries: foundedCountries });
    case DELETE_COUNTRY:
      const remainedCountries = state.countries.filter(
        country => country.id !== action.id
      );
      const remainedVisibleCountries = state.visibleCountries.filter(
        country => country.id !== action.id
      );
      return Object.assign({}, state, {
        countries: remainedCountries,
        visibleCountries: remainedVisibleCountries
      });
    case SET_CONTINENT:
      const continentCountries = state.countries.filter(
        country => country.continent === action.text
      );
      return Object.assign({}, state, { visibleCountries: continentCountries });
  }
  return state;
};

export default countriesReducer;
