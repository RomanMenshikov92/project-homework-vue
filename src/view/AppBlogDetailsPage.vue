<template>
  <div class="wrapper">
    <AppBlogDetailsBanner></AppBlogDetailsBanner>
    <AppBlogListDetails></AppBlogListDetails>
  </div>
</template>

<script>
import AppBlogDetailsBanner from '@/components/AppBlogDetailsBanner.vue';
import AppBlogListDetails from '@/components/AppBlogListDetails.vue';

export default {
  name: 'AppBlogDetailsPage',
  data() {
    return {};
  },
  mounted() {},

  methods: {},

  components: {
    AppBlogDetailsBanner,
    AppBlogListDetails,
  },
};
</script>

<style lang="sass" scoped>
@import "./src/assets/sass/components/_blogs-list-details.sass"
</style>
