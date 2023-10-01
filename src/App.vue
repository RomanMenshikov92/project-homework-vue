<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import store from '@/store';
import AppHeader from './components/header/AppHeader.vue';
import AppFooter from './components/footer/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
  store,
};
</script>

<style lang="sass">
@import "./assets/sass/_vars"
@import "./assets/sass/style"
</style>
