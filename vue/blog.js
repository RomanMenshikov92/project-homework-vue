let app = new Vue({
  el: "#app",
  data: {
    articles: [
      {
        img: "img/photo_blog.png",
        design: "Kitchan Design",
        title: "Low Cost Latest Invented Interior Designing Ideas",
        date: "26 December,2022",
        description:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
      },
      {
        img: "img/article_1.png",
        design: "Kitchan Design",
        title: "Let’s Get Solution For Building Construction Work",
        date: "26 December,2022",
        description:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
      },
      {
        img: "img/article_2.png",
        design: "Living Design",
        title: "Low Cost Latest Invented Interior Designing Ideas",
        date: "22 December,2022",
        description:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
      },
      {
        img: "img/article_3.png",
        design: "Interior Design",
        title: "Best For Any Office & Business Interior Solution",
        date: "25 December,2022",
        description:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
      },
      {
        img: "img/article_4.png",
        design: "Kitchan Design",
        title: "Let’s Get Solution For Building Construction Work",
        date: "26 December,2022",
        description:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
      },
      {
        img: "img/article_5.png",
        design: "Living Design",
        title: "Low Cost Latest Invented Interior Designing Ideas",
        date: "22 December,2022",
        description:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
      },
      {
        img: "img/article_6.png",
        design: "Interior Design",
        title: "Best For Any Office & Business Interior Solution",
        date: "25 December,2022",
        description:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
      },
    ],
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
});
