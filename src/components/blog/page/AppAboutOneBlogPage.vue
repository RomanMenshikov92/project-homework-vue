<template>
  <div class="wrapper">
    <BannerComponent :img="imageDetails"></BannerComponent>
    <div class="blog-details">
      <div class="blog-details__container container">
        <div class="blog-details__blog-wrapper">
          <AppOneBlogDetails :blog="blog"></AppOneBlogDetails>
        </div>
        <div class="blog-details__tags-wrapper">
          <TagsComponent :tags="getTags"></TagsComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BannerComponent from '@/components/other/BannerComponent.vue';
import AppOneBlogDetails from '@/components/blog/components/AppOneBlogDetails.vue';
import TagsComponent from '@/components/other/TagsComponent.vue';

export default {
  name: 'AppAboutOneBlogPage',
  components: {
    BannerComponent,
    AppOneBlogDetails,
    TagsComponent,
  },
  data() {
    return {
      blog: {},
      // tags: [],
    };
  },
  computed: {
    ...mapGetters(['getBlogById', 'blogBanner']),
    getTags() {
      return this.blog.tags;
    },
    imageDetails: ({ blogBanner }) => blogBanner.imgDetails,
  },
  methods: {
    // clickTag(tag) {
    //   this.blog = this.getBlogById(tag);
    // },
  },

  mounted() {
    this.blog = this.getBlogById(this.$route.params.id);
  },
};
</script>
<style scoped lang="sass">
@import "./src/assets/sass/components/_blog-details.sass"
@import "./src/assets/sass/components/_tags.sass"
</style>
