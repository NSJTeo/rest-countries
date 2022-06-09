<template>
  <Header />
</template>

<script>
import Header from './components/Header.vue';
export default {
  name: 'App',
  methods: {
    logState() {
      console.log(this.$store.state.darkModeOn);
    },
  },
  components: { Header },
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
