<template>
  <div class="wrapper">
    <BannerComponent
      :title="title"
      :breadcrumbs="breadcrumbs"
      :img="img"
    ></BannerComponent>
    <div class="our-project">
      <div class="our-project__container container">
        <CategoriesComponent
          @ClickCategory="clickCategory($event)"
          :categories="categories"
        ></CategoriesComponent>
        <ul class="our-project__list list-reset">
          <AppOneProjectGrid
            v-for="(project, i) in showProjectArr"
            :key="i"
            :project="project"
          ></AppOneProjectGrid>
        </ul>
      </div>
      <PaginationComponent
        :currentPage="currentPage"
        :getPaginationLen="getPaginationLen"
        @pagination-click="clickPagination"
      ></PaginationComponent>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BannerComponent from '@/components/other/BannerComponent.vue';
import AppOneProjectGrid from '@/components/project/components/AppOneProjectGrid.vue';
import CategoriesComponent from '@/components/other/CategoriesComponent.vue';
import PaginationComponent from '@/components/other/PaginationComponent.vue';

export default {
  name: 'AppAboutAllBlogPage',
  components: {
    BannerComponent,
    AppOneProjectGrid,
    CategoriesComponent,
    PaginationComponent,
  },
  data() {
    return {
      projects: [],
      currentPage: 1,
      showProjectArr: [],
      categories: [],
    };
  },

  computed: {
    ...mapGetters([
      'getProjects',
      'getProjectByTag',
      'getProjectsTags',
      'projectBanner',
    ]),
    getPaginationLen() {
      return Math.ceil(this.projects.length / 6);
    },
    title: ({ projectBanner }) => projectBanner.title,
    breadcrumbs: ({ projectBanner }) => projectBanner.breadcrumbs,
    img: ({ projectBanner }) => projectBanner.img,
  },

  methods: {
    clickCategory(category) {
      this.projects = this.getProjectByTag(category);
      this.clickPagination(1);
    },
    clickPagination(start) {
      if (start < this.getPaginationLen + 1) {
        this.currentPage = start;
        this.showProjectArr = this.projects.slice(start * 6 - 6, start * 6);
      } else if (start === this.getPaginationLen + 1) {
        if (this.getPaginationLen > this.currentPage) {
          this.currentPage++;
          this.showProjectArr = this.projects.slice(
            this.currentPage * 6 - 6,
            this.currentPage * 6
          );
        }
      }
    },
  },
  mounted() {
    this.categories = this.getProjectsTags;
    this.projects = this.getProjects;
    this.currentPage = 1;
    this.showProjectArr = this.projects.slice(
      this.currentPage * 6 - 6,
      this.currentPage * 6
    );
  },
};
</script>

<style scoped lang="sass">
@import './src/assets/sass/components/_our-project.sass'
@import './src/assets/sass/components/_categories.sass'
</style>
