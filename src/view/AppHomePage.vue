<template>
  <div class="wrapper">
    <AppHomeBanner></AppHomeBanner>
    <AppProject></AppProject>
    <AppHomeNumber></AppHomeNumber>
    <AppBlogs></AppBlogs>
  </div>
</template>

<script>
import AppHomeBanner from '@/components/home/AppHomeBanner.vue';
import AppProject from '@/components/home/AppProjects.vue';
import AppHomeNumber from '@/components/home/AppHomeNumber.vue';
import AppBlogs from '@/components/home/AppBlogs.vue';

export default {
  name: 'AppHomePage',
  components: {
    AppHomeBanner,
    AppProject,
    AppHomeNumber,
    AppBlogs,
  },
};
</script>

<style lang="sass" scoped>
@import "./src/assets/sass/components/_wrapper.sass"
</style>
