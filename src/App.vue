<template>
  <div id="app">
    <AppHeader></AppHeader>
    <!-- <AppHomePage></AppHomePage> -->
    <!-- <AppBlogPage></AppBlogPage> -->
    <!-- <AppBlogDetailsPage></AppBlogDetailsPage> -->
    <div class="products">
      <div class="products__container container">
        <ProductDetails />
      </div>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
// import AppHomePage from './view/AppHomePage.vue';
// import AppBlogPage from './view/AppBlogPage.vue';
// import AppBlogDetailsPage from './view/AppBlogDetailsPage.vue';
import ProductDetails from '@/components/ProductDetails.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    // AppHomePage,
    // AppBlogPage,
    // AppBlogDetailsPage,
    ProductDetails,
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
.products
  padding: 100px 0
  background-color: #ffe4b5

.products__container
  display: grid
  grid-template-columns: 1fr
  justify-items: center
  align-items: center
  gap: 10px
</style>
