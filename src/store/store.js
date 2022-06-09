import { createStore } from 'vuex';

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
  },
});
