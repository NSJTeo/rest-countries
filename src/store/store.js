import { createStore } from 'vuex';
import axios from 'axios';

export const store = createStore({
  state() {
    return {
      darkModeOn: false,
      countries: [],
      selectedCountry: null,
    };
  },
  mutations: {
    toggleDarkMode(state) {
      state.darkModeOn = !state.darkModeOn;
    },
    addCountries(state, payload) {
      state.countries = payload;
    },
  },
  actions: {
    addCountries: async ({ commit }) => {
      console.log('getting countries');
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const { data: countries } = response;
        console.log(countries);
        commit('addCountries', countries);
      } catch (err) {
        console.log(err.message);
      }
    },
  },
});
