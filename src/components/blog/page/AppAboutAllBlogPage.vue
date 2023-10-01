<template>
  <div class="wrapper">
    <BannerComponent
      :title="title"
      :breadcrumbs="breadcrumbs"
      :img="image"
    ></BannerComponent>
    <div class="articlenews-blog">
      <div class="articlenews-blog__container container">
        <div class="articlenews-blog__last-post">
          <h2 class="articlenews-blog__last-post-title title">Latest Post</h2>
          <AppLastBlog :blog="lastBlog"></AppLastBlog>
        </div>
        <div class="articlenews-blog__articles">
          <h2 class="articlenews-blog__articles-title title">
            Articles & News
          </h2>
          <ul class="articlenews-blog__articles-list list-reset">
            <AppOneBlog
              v-for="(blog, i) in showBlogArr"
              :key="i"
              :blog="blog"
            ></AppOneBlog>
          </ul>
        </div>
        <PaginationComponent
          :currentPage="currentPage"
          :getPaginationLen="getPaginationLen"
          @pagination-click="clickPagination"
        ></PaginationComponent>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BannerComponent from '@/components/other/BannerComponent.vue';
import AppLastBlog from '@/components/blog/components/AppLastBlog.vue';
import AppOneBlog from '@/components/blog/components/AppOneBlog.vue';
import PaginationComponent from '@/components/other/PaginationComponent.vue';

export default {
  name: 'AppAboutAllBlogPage',
  components: {
    BannerComponent,
    AppLastBlog,
    AppOneBlog,
    PaginationComponent,
  },
  data() {
    return {
      blogs: [],
      lastBlog: {},
      currentPage: 1,
      showBlogArr: [],
    };
  },

  computed: {
    ...mapGetters(['getBlogs', 'getLastBlog', 'blogBanner']),
    getPaginationLen() {
      return Math.ceil(this.blogs.length / 6);
    },
    title: ({ blogBanner }) => blogBanner.title,
    breadcrumbs: ({ blogBanner }) => blogBanner.breadcrumbs,
    image: ({ blogBanner }) => blogBanner.img,
  },

  methods: {
    clickPagination(start) {
      if (start < this.getPaginationLen + 1) {
        this.currentPage = start;
        this.showBlogArr = this.blogs.slice(start * 6 - 6, start * 6);
      } else if (start === this.getPaginationLen + 1) {
        if (this.getPaginationLen > this.currentPage) {
          this.currentPage++;
          this.showBlogArr = this.blogs.slice(
            this.currentPage * 6 - 6,
            this.currentPage * 6
          );
        }
      }
    },
  },
  mounted() {
    this.blogs = this.getBlogs;
    this.lastBlog = this.getLastBlog;
    this.currentPage = 1;
    this.showBlogArr = this.blogs.slice(
      this.currentPage * 6 - 6,
      this.currentPage * 6
    );
  },
};
</script>

<style scoped lang="sass">
@import './src/assets/sass/components/_articlenews-blog.sass'
</style>
