<template>
  <main>
    <ul class="countries__container">
      <li
        :key="country.name"
        v-for="country in countries"
        class="country__container"
      >
        <router-link
          :to="{
            name: 'Country',
            params: { id: country.name.common.toLowerCase() },
          }"
          class="country__link"
        >
          <img :src="country.flags.svg" alt="" class="country__flag" />
          <div class="country__text">
            <h2 class="country__name">
              {{ country.name.common }}
            </h2>
            <p class="country__info-container">
              Population:
              <span class="country__info">{{ country.population }}</span>
            </p>
            <p class="country__info-container">
              Region: <span class="country__info">{{ country.region }}</span>
            </p>
            <p class="country__info-container">
              Capital:
              <span class="country__info">{{
                (country.capital && country.capital[0]) || 'n/a'
              }}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    countries() {
      return this.$store.state.countries;
    },
  },
  mounted() {
    this.$store.dispatch('addCountries');
  },
};
</script>

<style lang="scss" scoped>
main {
  background: hsl(0, 0%, 98%);
  padding: 0 56px;
}

.countries {
  &__container {
    display: flex;
    flex-wrap: wrap;
    gap: 75px;
    justify-content: center;
  }
}

.country {
  &__container {
    width: 264px;
    background: #ffffff;
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
    border-radius: 5px;
    padding-bottom: 46px;
    list-style: none;
    cursor: pointer;
  }
  &__link {
    color: black;
    text-decoration: none;
  }
  &__flag {
    width: 100%;
    margin-bottom: 24px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  &__text {
    padding-left: 24px;
  }
  &__name {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 1rem;
  }
  &__info-container {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 0.5rem;
    &:last-child {
      margin: 0;
    }
  }
  &__info {
    font-weight: 300;
  }
}
</style>
