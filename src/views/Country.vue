<template>
  <main>
    <router-link to="/">Back</router-link>
    <div v-if="country">
      <p>{{ country.name.common }}</p>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Country',
  data() {
    return {
      country: null,
    };
  },
  async mounted() {
    console.log(this.$route.params.id);
    const name = this.$route.params.id;
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/name/${name}`
    );
    const [country] = data;
    console.log(country);
    this.setCountry(country);
  },
  methods: {
    setCountry(country) {
      this.country = country;
    },
  },
};
</script>
