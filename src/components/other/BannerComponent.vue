<template>
  <div class="banner">
    <div class="banner__container">
      <img class="banner__img" :src="img" :alt="title" />
      <div v-if="breadcrumbs && title" class="banner__text">
        <h2 class="banner__title title">{{ title }}</h2>
        <div class="banner__breadcrumbs">{{ breadcrumbs }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerComponent',
  props: ['title', 'breadcrumbs', 'img'],
};
</script>

<style scoped lang="sass">
@import './src/assets/sass/components/_banners.sass'
</style>
