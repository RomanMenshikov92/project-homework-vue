<template>
  <div class="articlenews">
    <div class="articlenews__container container">
      <h2 class="articlenews__title title">Articles & News</h2>
      <p class="articlenews__paragraph paragraph">
        It is a long established fact that a reader will be distracted by the of
        readable content of a page when lookings at its layouts the points of
        using.
      </p>
      <ul class="articlenews__list list-reset">
        <AppOneBlog
          v-for="(blog, i) in blogs"
          :key="i"
          :blog="blog"
        ></AppOneBlog>
      </ul>
    </div>
  </div>
</template>

<script>
import AppOneBlog from '@/components/blog/components/AppOneBlog.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'AppBlogs',
  components: { AppOneBlog },
  data() {
    return {
      blogs: [],
    };
  },
  computed: {
    ...mapGetters(['getThreeBlog']),
  },
  mounted() {
    this.blogs = this.getThreeBlog;
  },
};
</script>

<style scoped lang="sass">
@import './src/assets/sass/components/_articlenews.sass'
</style>
