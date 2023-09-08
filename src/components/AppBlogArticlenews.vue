<template>
  <div class="articlenews-blog">
    <div class="articlenews-blog__container container">
      <div class="articlenews-blog__last-post">
        <h2 class="articlenews-blog__last-post-title title">Latest Post</h2>
        <article class="articlenews-blog__last-post-article">
          <img
            :src="getLastArticle.img"
            :alt="getLastArticle.title"
            class="articlenews-blog__last-post-img"
          />
          <div class="articlenews-blog__last-post-text">
            <h3 class="articlenews-blog__last-post-subtitle title">
              {{ getLastArticle.title }}
            </h3>
            <p class="articlenews-blog__last-post-description paragraph">
              {{ getLastArticle.description }}
            </p>
            <div class="articlenews-blog__last-post-footer">
              <div class="articlenews-blog__last-post-date">
                {{ getLastArticle.date }}
              </div>
              <a class="articlenews-blog__last-post-link-btn" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="53"
                  viewBox="0 0 52 53"
                  fill="none"
                >
                  <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                  <path
                    d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
                    stroke="#292F36"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>
      <div class="articlenews-blog__articles">
        <h2 class="articlenews-blog__articles-title title">Articles & News</h2>
        <ul class="articlenews-blog__articles-list list-reset">
          <li
            v-for="(article, index) in getAllPosts"
            :key="index"
            class="articlenews-blog__articles-item"
          >
            <article class="articlenews-blog__articles-article">
              <div class="articlenews-blog__articles-wrapper">
                <img
                  class="articlenews-blog__articles-wrapper-img"
                  :src="article.img"
                  :alt="article.title"
                />
                <div class="articlenews-blog__articles-wrapper-text">
                  {{ article.design }}
                </div>
              </div>
              <h3 class="articlenews-blog__articles-subtitle title">
                {{ article.title }}
              </h3>
              <div class="articlenews-blog__articles-footer">
                <div class="articlenews-blog__articles-date">
                  {{ article.date }}
                </div>
                <a class="articlenews-blog__articles-link-btn" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="53"
                    viewBox="0 0 52 53"
                    fill="none"
                  >
                    <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                    <path
                      d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
                      stroke="#292F36"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </article>
          </li>
        </ul>
      </div>
      <div class="articlenews-blog__pagination">
        <div class="articlenews-blog__pagination-wrapper">
          <a href="#" class="articlenews-blog__pagination-link">
            <span class="articlenews-blog__pagination-link-text">01</span>
          </a>
        </div>
        <div class="articlenews-blog__pagination-wrapper">
          <a href="#" class="articlenews-blog__pagination-link">
            <span class="articlenews-blog__pagination-link-text">02</span>
          </a>
        </div>
        <div class="articlenews-blog__pagination-wrapper">
          <a href="#" class="articlenews-blog__pagination-link">
            <span class="articlenews-blog__pagination-link-text">03</span>
          </a>
        </div>
        <div class="articlenews-blog__pagination-wrapper">
          <a href="#" class="articlenews-blog__pagination-link">
            <span class="articlenews-blog__pagination-link-text">
              <svg
                width="53"
                height="52"
                viewBox="0 0 53 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBlogArticlenews',
  data: function () {
    return {
      articles: [
        {
          img: require('@/assets/img/photo_blog.png'),
          design: 'Kitchan Design',
          title: 'Low Cost Latest Invented Interior Designing Ideas',
          date: '26 December,2022',
          description:
            'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        },
        {
          img: require('@/assets/img/article_2.png'),
          design: 'Kitchan Design',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December,2022',
          description:
            'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        },
        {
          img: require('@/assets/img/article_3.png'),
          design: 'Living Design',
          title: 'Low Cost Latest Invented Interior Designing Ideas',
          date: '22 December,2022',
          description:
            'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        },
        {
          img: require('@/assets/img/article_4.png'),
          design: 'Interior Design',
          title: 'Best For Any Office & Business Interior Solution',
          date: '25 December,2022',
          description:
            'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        },
        {
          img: require('@/assets/img/article_5.png'),
          design: 'Kitchan Design',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December,2022',
          description:
            'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        },
        {
          img: require('@/assets/img/article_6.png'),
          design: 'Living Design',
          title: 'Low Cost Latest Invented Interior Designing Ideas',
          date: '22 December,2022',
          description:
            'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        },
        {
          img: require('@/assets/img/article_1.png'),
          design: 'Interior Design',
          title: 'Best For Any Office & Business Interior Solution',
          date: '25 December,2022',
          description:
            'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        },
      ],
    };
  },

  computed: {
    getLastArticle() {
      return this.articles[0];
    },
    getAllPosts() {
      return this.articles.slice(1);
    },
  },

  methods: {},
};
</script>

<style scoped lang="sass">
@import './src/assets/sass/components/_articlenews-blog.sass'
</style>
