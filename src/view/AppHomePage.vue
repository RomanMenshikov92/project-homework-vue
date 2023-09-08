<template>
  <div class="wrapper">
    <AppHomeBanner></AppHomeBanner>
    <AppProject></AppProject>
    <AppHomeNumber></AppHomeNumber>
    <AppArticleNews></AppArticleNews>
  </div>
</template>

<script>
import AppHomeBanner from '@/components/AppHomeBanner.vue';
import AppProject from '@/components/AppProject.vue';
import AppHomeNumber from '@/components/AppHomeNumber.vue';
import AppArticleNews from '@/components/AppArticleNews.vue';

export default {
  name: 'AppHomePage',
  data() {
    return {};
  },
  mounted() {},

  methods: {},

  components: {
    AppHomeBanner,
    AppProject,
    AppHomeNumber,
    AppArticleNews,
  },
};
</script>

<style lang="sass" scoped>
@import "./src/assets/sass/components/_wrapper.sass"
</style>
