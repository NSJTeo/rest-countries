<template>
  <header class="header__container">
    <h1 class="header__title">Where in the World?</h1>
    <button class="header__dark-mode-button" @click="toggleDarkMode">
      <img :src="darkModeIcon" alt="" class="header__dark-mode-button-icon" />
      <p class="header__dark-mode-button-text">Dark Mode</p>
    </button>
  </header>
</template>

<script>
import darkModeIcon from '../assets/icons/icon-dark-mode.svg';

export default {
  name: 'Header',
  data() {
    return {
      darkModeIcon,
    };
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit('toggleDarkMode');
    },
  },
};
</script>

<style lang="scss">
.header {
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 2rem 1rem;
  }
  &__title {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    color: #111517;
  }
  &__dark-mode-button {
    display: flex;
    background: none;
    border: none;
    cursor: pointer;
  }
  &__dark-mode-button-icon {
    margin-right: 0.5rem;
  }
  &__dark-mode-button-text {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #111517;
  }
}
</style>
