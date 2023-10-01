<template>
  <div class="wrapper">
    <BannerComponent :img="imageDetails"></BannerComponent>
    <div class="project-details">
      <div class="project-details__container container">
        <AppOneProjectDetails :project="project"></AppOneProjectDetails>
        <SliderComponent :imgSlider="imgSlider"></SliderComponent>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BannerComponent from '@/components/other/BannerComponent.vue';
import AppOneProjectDetails from '@/components/project/components/AppOneProjectDetails.vue';
import SliderComponent from '@/components/other/SliderComponent.vue';

export default {
  name: 'AppAboutOneBlogPage',
  components: {
    BannerComponent,
    AppOneProjectDetails,
    SliderComponent,
  },
  data() {
    return {
      project: {},
      imgSlider: [],
    };
  },
  computed: {
    ...mapGetters(['getProjectById', 'projectBanner']),
    imageDetails: ({ projectBanner }) => projectBanner.imgDetails,
  },
  mounted() {
    this.project = this.getProjectById(this.$route.params.id);
    this.imgSlider = this.project.imgSlider;
  },
};
</script>

<style scoped lang="sass">
@import "./src/assets/sass/components/_project-details.sass"
</style>
