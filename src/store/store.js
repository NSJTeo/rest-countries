import { createStore } from 'vuex';
import axios from 'axios';

export const store = createStore({
  state() {
    return {
      darkModeOn: false,
      countries: [],
      country: null,
    };
  },
  mutations: {
    toggleDarkMode(state) {
      state.darkModeOn = !state.darkModeOn;
    },
    addCountries(state, payload) {
      state.countries = payload;
    },
    setCountry(state, payload) {
      state.country = payload;
    },
  },
  actions: {
    addCountries: async ({ commit }) => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const { data: countries } = response;
        commit('addCountries', countries);
      } catch (err) {
        console.log(err.message);
      }
    },
    getCountry: async ({ commit }, name) => {
      try {
        const { data } = await axios.get(
          `https://restcountries.com/v3.1/name/${name}?fullText=true`
        );
        const [country] = data;
        console.log(country);
        commit('setCountry', country);
      } catch (err) {
        console.log(err.message);
      }
    },
  },
});
