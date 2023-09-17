<template>
  <div class="wrapper">
    <AppProjectBanner></AppProjectBanner>
    <AppOurProject></AppOurProject>
  </div>
</template>

<script>
import AppProjectBanner from '@/components/AppProjectBanner.vue';
import AppOurProject from '@/components/AppOurProject.vue';

export default {
  name: 'AppProjectPage',
  data() {
    return {};
  },
  mounted() {},

  methods: {},

  components: {
    AppProjectBanner,
    AppOurProject,
  },
};
</script>
<style lang="sass" scoped>
@import "./src/assets/sass/components/_wrapper.sass"
</style>
