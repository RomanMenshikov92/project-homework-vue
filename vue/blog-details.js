Vue.component("blogs-list", {
  data() {
    return {
      blogs: [
        {
          id: 1,
          header: "#1 Let’s Get Solution for Building Construction Work",
          img: "img/photo1_blog-details.png",
          date: "26 December,2022",
          crumbs: "Interior / Home / Decore",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          tags: ["Bedroom", "Architecture", "Kitchen Planning"],
          detailsHeader: "#1 Design sprints are great",
          detailsText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n" +
            "1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n" +
            "\n" +
            "2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n" +
            "3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n",
          detailsImg: "img/photo2_blog-details.png",
          detailsSubText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
        {
          id: 2,
          header: "#2 Let’s Get Solution for Building Construction Work",
          img: "img/article_1.png",
          date: "26 December,2023",
          crumbs: "Interior / Home / Decore",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          tags: ["Kitchen", "Bedroom", "Building"],
          detailsHeader: "#2 Design sprints are great",
          detailsText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. <br><br>\n                    1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br><br>\n                    2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br><br>\n                    3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br><br>",
          detailsImg: "img/article_2.png",
          detailsSubText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
        {
          id: 3,
          header: "#3 Let’s Get Solution for Building Construction Work",
          img: "img/article_3.png",
          date: "26 December,2022",
          crumbs: "Interior / Home / Decore",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          tags: ["Kitchen", "Building", "Kitchen Planning"],
          detailsHeader: "#3 Design sprints are great",
          detailsText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. <br><br>\n                    1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br><br>\n                    2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br><br>\n                    3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.<br><br>",
          detailsImg: "img/article_4.png",
          detailsSubText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
      ],
      filterItem: "",
      filterId: "",
      showDetails: false,
    };
  },
  computed: {
    getTags() {
      let tags = [];
      this.blogs.forEach((el) => {
        tags.push(...el.tags);
      });
      return new Set(tags);
    },

    filteredItems() {
      return this.blogs.filter((blog) => {
        if (this.filterItem === "") {
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
        this.filterItem = "";
      } else {
        this.filterItem = tag;
      }
    },

    showAll(id) {
      this.filterId === id ? (this.filterId = "") : (this.filterId = id);
      this.showDetails = !this.showDetails;
    },
  },

  template: `
  <div class="blogs-list">
      <div class="blogs-list-content">
          <div class="blogs-container" v-if="showDetails === false">
              <blog @showFullBlog="showAll" v-for="blog in filteredItems" :key="blog.id" :blog="blog"></blog>
          </div>
          <div class="blogs-container" v-if="showDetails === true">
              <blog @showFullBlog="showAll" :blog="filteredBlog"></blog>
              <blog-details :blog="filteredBlog"></blog-details>
          </div>
          <div class="tags-container">
              <div class="tag" :class="{'tag-clicked': tag === filterItem}" v-for="tag in getTags" :key="tag.id" @click="clickTag(tag)">{{ tag }}</div>
          </div>
      </div>
  </div>
  `,
});

Vue.component("blog", {
  props: ["blog"],

  data() {
    return {
      isHidden: true,
    };
  },

  template: `
  <div class="blog" @click="showDetails(blog.id)">
      <div class="blog-content">
          <div class="blog-header">
              <p class="blog-header__text">{{ blog.header }}</p>
          </div>
          <div class="blog-content-img-wrapper">
              <img class="blog-content-img" :src=blog.img alt="blog-img">
          </div>
          <div class="blog-footer">
              <div class="blog-date">
                  <p class="blog-date__text">
                      {{ blog.date }}
                  </p>
              </div>
              <div class="blog-crumbs">
                  <p class="blog-crumbs__text">
                      {{ blog.crumbs }}
                  </p>
              </div>
          </div>
          <div class="blog-text">
              {{ blog.text }}
          </div>
      </div>
  </div>
  `,
  methods: {
    showDetails(id) {
      this.$emit("showFullBlog", id);
      console.log(id);
    },
  },
});

Vue.component("blog-details", {
  props: ["blog"],

  template: `
  <div class="blog-details">
      <div class="blog-details-content">
          <div class="blog-details-content-top">
              <div class="blog-details-content-top__content">
                  <svg width="74" height="56" viewBox="0 0 74 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z" fill="#CDA274"/>
                  </svg>
                  <p class="blog-details-content-top__text">The details are not the details. They make the design.</p>
              </div>
          </div>
          <div class="blog-details-content-main">
              <p class="blog-details-content-main__header">
                  {{ blog.detailsHeader }}
              </p>
              <p class="blog-details-content-main__text">
                  {{ blog.detailsText }}
              </p>
          </div>
          <div class="blog-details-content-sub">
              <div class="blog-details-content-sub-img-wrapper">
                  <img class="blog-details-content-sub-img" :src=blog.detailsImg alt="sub">
              </div>
              <p class="blog-details-content-sub__text">
                  {{ blog.detailsSubText }}
              </p>
          </div>
      </div>
  </div>
  `,
  methods: {
    showDetails(id) {
      this.$emit("showFullBlog", id);
      console.log(id);
    },
  },
});

let app = new Vue({
  el: "#App_blog",
  data: {},

  methods: {},
});
