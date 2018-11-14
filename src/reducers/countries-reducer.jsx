import { GET_COUNTRIES } from "../actions/actions-countries";
import countriesDB from "../data/countries.json";

const initialState = {
  countries: countriesDB
};

const countriesReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return Object.assign({}, state, { countries: state.countries });
  }
  return state;
};

export default countriesReducer;
