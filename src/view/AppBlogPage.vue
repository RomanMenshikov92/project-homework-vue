<template>
  <div class="wrapper">
    <AppBlogBanner></AppBlogBanner>
    <AppBlogArticlenews></AppBlogArticlenews>
  </div>
</template>

<script>
import AppBlogBanner from '@/components/AppBlogBanner.vue';
import AppBlogArticlenews from '@/components/AppBlogArticlenews.vue';

export default {
  name: 'AppBlogPage',
  data() {
    return {};
  },
  mounted() {},

  methods: {},

  components: {
    AppBlogBanner,
    AppBlogArticlenews,
  },
};
</script>

<style lang="sass" scoped>
@import "./src/assets/sass/components/_wrapper.sass"
</style>
