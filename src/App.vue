<template>
  <Header />
  <router-view />
</template>

<script>
import Header from './components/Header.vue';
import axios from 'axios';

export default {
  name: 'App',
  methods: {},
  components: { Header },
  mounted() {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      console.log(response.data);
    });
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
img {
  display: block;
}
</style>
