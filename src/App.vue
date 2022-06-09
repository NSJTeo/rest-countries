<template>
  <div @click="logState">Hello World</div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logState() {
      console.log(this.$store.state.darkModeOn);
    },
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
