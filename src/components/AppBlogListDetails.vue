<template>
  <div class="blogs-list-details">
    <div class="blogs-list-details__container container">
      <div class="blogs-container" v-if="showDetails === false">
        <AppBlogComponent
          @showFullBlog="showAll"
          v-for="blog in filteredItems"
          :key="blog.id"
          :blog="blog"
        ></AppBlogComponent>
      </div>
      <div class="blogs-container" v-if="showDetails === true">
        <AppBlogComponent
          @showFullBlog="showAll"
          :blog="filteredBlog"
        ></AppBlogComponent>
        <AppBlogDetailsComponents :blog="filteredBlog"></AppBlogDetailsComponents>
      </div>
      <div class="tags-container">
        <div
          class="tag"
          :class="{ 'tag-clicked': tag === filterItem }"
          v-for="tag in getTags"
          :key="tag.id"
          @click="clickTag(tag)"
        >
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBlogComponent from '@/components/AppBlogComponent.vue';
import AppBlogDetailsComponents from '@/components/AppBlogDetailsComponents.vue';

export default {
  name: 'BlogListComponent',
  components: {
    AppBlogDetailsComponents,
    AppBlogComponent,
  },
  data() {
    return {
      blogs: [
        {
          id: 1,
          header: '#1 Let’s Get Solution for Building Construction Work',
          img: require('@/assets/img/photo1_blog-details.png'),
          date: '26 December,2022',
          crumbs: 'Interior / Home / Decore',
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
          detailsHeader: '#1 Design sprints are great',
          detailsText:
            'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
            '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
            '\n' +
            '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
            '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
          detailsImg: require('@/assets/img/photo2_blog-details.png'),
          detailsSubText:
            'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        },
        {
          id: 2,
          header: '#2 Let’s Get Solution for Building Construction Work',
          img: require('@/assets/img/article_1.png'),
          date: '26 December,2023',
          crumbs: 'Interior / Home / Decore',
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          tags: ['Kitchen', 'Bedroom', 'Building'],
          detailsHeader: '#2 Design sprints are great',
          detailsText:
            'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. <br><br>\n                    1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br><br>\n                    2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br><br>\n                    3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br><br>',
          detailsImg: require('@/assets/img/article_2.png'),
          detailsSubText:
            'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        },
        {
          id: 3,
          header: '#3 Let’s Get Solution for Building Construction Work',
          img: require('@/assets/img/article_3.png'),
          date: '26 December,2022',
          crumbs: 'Interior / Home / Decore',
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          tags: ['Kitchen', 'Building', 'Kitchen Planning'],
          detailsHeader: '#3 Design sprints are great',
          detailsText:
            'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. <br><br>\n                    1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br><br>\n                    2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br><br>\n                    3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br><br>',
          detailsImg: require('@/assets/img/article_4.png'),
          detailsSubText:
            'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        },
      ],
      filterItem: '',
      filterId: '',
      showDetails: false,
    };
  },
  computed: {
    getTags() {
      const tags = [];
      this.blogs.forEach((el) => {
        tags.push(...el.tags);
      });
      return new Set(tags);
    },

    filteredItems() {
      return this.blogs.filter((blog) => {
        if (this.filterItem === '') {
          return this.blogs;
        } else {
          return blog.tags.includes(this.filterItem);
        }
      });
    },

    filteredBlog() {
      const blog = this.blogs.filter((blog) => {
        return blog.id === Number(this.filterId);
      });

      return blog[0];
    },
  },

  methods: {
    clickTag(tag) {
      if (this.filterItem === tag) {
        this.filterItem = '';
      } else {
        this.filterItem = tag;
      }
    },

    showAll(id) {
      this.filterId === id ? (this.filterId = '') : (this.filterId = id);
      this.showDetails = !this.showDetails;
    },
  },
};
</script>

<style scoped lang="sass">
@import './src/assets/sass/components/_blogs-list-details.sass'
</style>
