<template>
  <main>
    <router-link to="/" class="country__back-btn"
      ><img :src="arrowIcon" alt="" /> Back</router-link
    >
    <div v-if="country" class="country__container">
      <img :src="country.flags.svg" alt="" class="country__flag" />
      <p class="country__name">{{ country.name.common }}</p>
      <p class="country__label">
        Population: <span class="country__info">{{ country.population }}</span>
      </p>
      <p class="country__label">
        Region: <span class="country__info">{{ country.region }}</span>
      </p>
      <p class="country__label">
        Sub Region: <span class="country__info">{{ country.subregion }}</span>
      </p>
      <p
        v-if="country.capital && country.capital[0]"
        class="country__label country__label--capital"
      >
        Capital: <span class="country__info">{{ country.capital[0] }}</span>
      </p>
      <p v-if="country.tld && country.tld[0]" class="country__label">
        Top Level Domain:
        <span class="country__info">{{ country.tld[0] }}</span>
      </p>
      <p class="country__label">
        Currencies:
        <span
          v-for="currency in country.currencies"
          :key="currency.name"
          class="country__info"
          >{{ currency.name }},
        </span>
      </p>
      <p class="country__label">
        Languages:
        <span
          v-for="language in country.languages"
          :key="language.name"
          class="country__info"
          >{{ language }},
        </span>
      </p>
    </div>
  </main>
</template>

<script>
import arrowIcon from '../assets/icons/icon-arrow.svg';
export default {
  name: 'Country',
  computed: {
    country() {
      return this.$store.state.country;
    },
  },
  data() {
    return {
      arrowIcon,
    };
  },
  mounted() {
    const country = this.$route.params.id;
    this.$store.dispatch('getCountry', country);
  },
};
</script>

<style lang="scss" scoped>
main {
  background: hsl(0, 0%, 98%);
  padding: 0 28px;
  padding-top: 40px;
  padding-bottom: 60px;
}

.country {
  &__back-btn {
    display: flex;
    margin-bottom: 64px;
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    color: #111517;
    background: #ffffff;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
    border-radius: 2px;
    padding: 6px 24px;
    width: fit-content;
    text-decoration: none;
    column-gap: 0.5rem;
  }
  &__container {
    width: 100%;
    background: hsl(0, 0%, 98%);
  }
  &__name {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 800;
    font-size: 22px;
    line-height: 30px;
    color: #111517;
    margin-bottom: 1rem;
  }
  &__flag {
    width: 100%;
    margin-bottom: 44px;
  }
  &__label {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 32px;
    color: #111517;
    &--capital {
      margin-bottom: 2rem;
    }
  }
  &__info {
    font-weight: 400;
  }
}
</style>
