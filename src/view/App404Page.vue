<template>
  <div class="wrapper">
    <div class="not-found">
      <div class="not-found__container container">
        <div class="not-found__text">
          <h2 class="not-found__title title">404</h2>
          <p class="not-found__paragraph paragraph">
            We are sorry, but the page you requested was not found
          </p>
          <button @click="goToHome" class="not-found__btn btn-reset">
            Back To Home
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887"
                stroke="#CDA274"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App404Page',
  methods: {
    goToHome() {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style scoped lang="sass">
@import "./src/assets/sass/components/_wrapper.sass"
@import "./src/assets/sass/components/_not-found.sass"
</style>
