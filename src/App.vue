<template>
  <div id="app">
    <AppHeader></AppHeader>
    <AppHomePage></AppHomePage>
    <!-- <AppBlogPage></AppBlogPage> -->
    <!-- <AppBlogDetailsPage></AppBlogDetailsPage> -->
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppHomePage from './view/AppHomePage.vue';
// import AppBlogPage from './view/AppBlogPage.vue';
// import AppBlogDetailsPage from './view/AppBlogDetailsPage.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppHomePage,
    // AppBlogPage,
    // AppBlogDetailsPage,
    AppFooter,
  },
};
</script>

<style lang="sass">
@import "./assets/sass/_vars"
// @import "./assets/sass/_mixins"
// @import "./assets/sass/_setting"
// @import "./assets/sass/_fonts"
// @import "./assets/sass/_mixins"
// @import "./assets/sass/style"
@import "./assets/sass/style"
</style>
