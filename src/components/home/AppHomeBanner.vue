<template>
  <div class="banner">
    <div class="banner__container container">
      <div class="banner__text">
        <div class="banner__title title">Let Your Home Be Unique</div>
        <div class="banner__paragraph paragraph">
          There are many variations of the passages of lorem Ipsum
          fromavailable, majority.
        </div>
        <router-link to="/project">
          <button class="banner__btn btn-reset">
            <span class="banner__btn-text">Get Started</span>
            <svg
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                stroke="#CDA274"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHomeBanner',
};
</script>

<style scoped lang="sass">
@import './src/assets/sass/components/_banner.sass'
</style>
