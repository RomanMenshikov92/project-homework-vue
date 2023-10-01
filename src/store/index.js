import Vue from 'vue';
import Vuex from 'vuex';
import { Set } from 'core-js/internals/set-helpers';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    banners: {
      blog: {
        title: 'Articles & News',
        breadcrumbs: 'Home / Blog',
        img: require('@/assets/img/banner_blog.png'),
        imgDetails: require('@/assets/img/banner_blog-details.jpg'),
      },
      project: {
        title: 'Our Project',
        breadcrumbs: 'Home / Project',
        img: require('@/assets/img/banner_project.png'),
        imgDetails: require('@/assets/img/banner_project-details.png'),
      },
    },

    blogs: [
      {
        id: 1,
        header: '#1 Let’s Get Solution for Building Construction Work',
        img: require('@/assets/img/article_1.png'),
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textLastPost:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsBlockquote:
          'The details are not the details. They make the design.',
        detailsHeader: '#1 Design sprints are great',
        detailsText:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        detailsTextList: [
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        ],
        detailsImg: require('@/assets/img/photo2_blog-details.png'),
        detailsSubText:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
      },
      {
        id: 2,
        header: '#2 Let’s Get Solution for Building Construction Work',
        img: require('@/assets/img/article_2.png'),
        date: '26 December,2023',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textLastPost:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        tags: ['Kitchen', 'Bedroom', 'Building'],
        detailsBlockquote:
          'The details are not the details. They make the design.',
        detailsHeader: '#2 Design sprints are great',
        detailsText:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        detailsTextList: [
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        ],
        detailsImg: require('@/assets/img/article_2.png'),
        detailsSubText:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
      },
      {
        id: 3,
        header: '#3 Let’s Get Solution for Building Construction Work',
        img: require('@/assets/img/article_3.png'),
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textLastPost:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        tags: ['Kitchen', 'Building', 'Kitchen Planning'],
        detailsBlockquote:
          'The details are not the details. They make the design.',
        detailsHeader: '#3 Design sprints are great',
        detailsText:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        detailsTextList: [
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        ],
        detailsImg: require('@/assets/img/article_4.png'),
        detailsSubText:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
      },
      {
        id: 4,
        header: '#4 Let’s Get Solution for Building Construction Work',
        img: require('@/assets/img/article_4.png'),
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textLastPost:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsBlockquote:
          'The details are not the details. They make the design.',
        detailsHeader: '#4 Design sprints are great',
        detailsText:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        detailsTextList: [
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        ],
        detailsImg: require('@/assets/img/photo2_blog-details.png'),
        detailsSubText:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
      },
      {
        id: 5,
        header: '#5 Let’s Get Solution for Building Construction Work',
        img: require('@/assets/img/article_5.png'),
        date: '26 December,2023',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textLastPost:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        tags: ['Kitchen', 'Bedroom', 'Building'],
        detailsBlockquote:
          'The details are not the details. They make the design.',
        detailsHeader: '#5 Design sprints are great',
        detailsText:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        detailsTextList: [
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        ],
        detailsImg: require('@/assets/img/article_2.png'),
        detailsSubText:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
      },
      {
        id: 6,
        header: '#6 Let’s Get Solution for Building Construction Work',
        img: require('@/assets/img/article_6.png'),
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textLastPost:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        tags: ['Kitchen', 'Building', 'Kitchen Planning'],
        detailsBlockquote:
          'The details are not the details. They make the design.',
        detailsHeader: '#6 Design sprints are great',
        detailsText:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        detailsTextList: [
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        ],
        detailsImg: require('@/assets/img/article_4.png'),
        detailsSubText:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
      },
      {
        id: 7,
        header: '#7 Let’s Get Solution for Building Construction Work',
        img: require('@/assets/img/article_1.png'),
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textLastPost:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsBlockquote:
          'The details are not the details. They make the design.',
        detailsHeader: '#7 Design sprints are great',
        detailsText:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        detailsTextList: [
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        ],
        detailsImg: require('@/assets/img/photo2_blog-details.png'),
        detailsSubText:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
      },
      {
        id: 8,
        header: '#8 Let’s Get Solution for Building Construction Work',
        img: require('@/assets/img/article_2.png'),
        date: '26 December,2023',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textLastPost:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        tags: ['Kitchen', 'Bedroom', 'Building'],
        detailsBlockquote:
          'The details are not the details. They make the design.',
        detailsHeader: '#8 Design sprints are great',
        detailsText:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        detailsTextList: [
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        ],
        detailsImg: require('@/assets/img/article_2.png'),
        detailsSubText:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
      },
      {
        id: 9,
        header: '#9 Let’s Get Solution for Building Construction Work',
        img: require('@/assets/img/article_3.png'),
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textLastPost:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        tags: ['Kitchen', 'Building', 'Kitchen Planning'],
        detailsBlockquote:
          'The details are not the details. They make the design.',
        detailsHeader: '#9 Design sprints are great',
        detailsText:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        detailsTextList: [
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        ],
        detailsImg: require('@/assets/img/article_4.png'),
        detailsSubText:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
      },
      {
        id: 10,
        header: '#10 Let’s Get Solution for Building Construction Work',
        img: require('@/assets/img/article_4.png'),
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textLastPost:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsBlockquote:
          'The details are not the details. They make the design.',
        detailsHeader: '#10 Design sprints are great',
        detailsText:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        detailsTextList: [
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        ],
        detailsImg: require('@/assets/img/photo2_blog-details.png'),
        detailsSubText:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
      },
      {
        id: 11,
        header: '#11 Let’s Get Solution for Building Construction Work',
        img: require('@/assets/img/article_5.png'),
        date: '26 December,2023',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textLastPost:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        tags: ['Kitchen', 'Bedroom', 'Building'],
        detailsBlockquote:
          'The details are not the details. They make the design.',
        detailsHeader: '#11 Design sprints are great',
        detailsText:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        detailsTextList: [
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        ],
        detailsImg: require('@/assets/img/article_2.png'),
        detailsSubText:
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
      },
    ],

    mainMenu: [
      {
        name: 'Home',
        href: '/',
      },
      {
        name: 'Project',
        href: '/project',
      },
      {
        name: 'Blog',
        href: '/blog',
      },
    ],

    projects: [
      {
        id: 1,
        // classes: ['project__wrapper-img-top-right','project__wrapper-img-top-left','project__wrapper-img-bottom-right','project__wrapper-img-bottom-left'],
        img: require('@/assets/img/project_1.png'),
        title: 'Modern Kitchan',
        model: 'Decor / Artchitecture',
        categories: ['Kitchan'],
        textFirst:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
        textSecond:
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
        imgSlider: [
          {
            id: 1,
            src: require('@/assets/img/project_slider_1.png'),
          },
          {
            id: 2,
            src: require('@/assets/img/project_slider_2.png'),
          },
          {
            id: 3,
            src: require('@/assets/img/project_slider_3.png'),
          },
        ],
        showStar: true,
      },
      {
        id: 2,
        img: require('@/assets/img/project_2.png'),
        title: 'Modern Kitchan',
        model: 'Decor / Artchitecture',
        categories: ['Kitchan'],
        textFirst:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
        textSecond:
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
        imgSlider: [
          {
            id: 1,
            src: require('@/assets/img/project_slider_1.png'),
          },
          {
            id: 2,
            src: require('@/assets/img/project_slider_2.png'),
          },
          {
            id: 3,
            src: require('@/assets/img/project_slider_3.png'),
          },
        ],
        showStar: false,
      },
      {
        id: 3,
        img: require('@/assets/img/project_3.png'),
        title: 'Modern Kitchan',
        model: 'Decor / Artchitecture',
        categories: ['Kitchan'],
        textFirst:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
        textSecond:
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
        imgSlider: [
          {
            id: 1,
            src: require('@/assets/img/project_slider_1.png'),
          },
          {
            id: 2,
            src: require('@/assets/img/project_slider_2.png'),
          },
          {
            id: 3,
            src: require('@/assets/img/project_slider_3.png'),
          },
        ],
        showStar: false,
      },
      {
        id: 4,
        img: require('@/assets/img/project_4.png'),
        title: 'Modern Kitchan',
        model: 'Decor / Artchitecture',
        categories: ['Kitchan'],
        textFirst:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
        textSecond:
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
        imgSlider: [
          {
            id: 1,
            src: require('@/assets/img/project_slider_1.png'),
          },
          {
            id: 2,
            src: require('@/assets/img/project_slider_2.png'),
          },
          {
            id: 3,
            src: require('@/assets/img/project_slider_3.png'),
          },
        ],
        showStar: true,
      },
      {
        id: 5,
        img: require('@/assets/img/page_project-1.png'),
        title: 'Minimal Bedroom',
        model: 'Decor / Artchitecture',
        categories: ['Living Area', 'Kitchan'],
        textFirst:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
        textSecond:
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
        imgSlider: [
          {
            id: 1,
            src: require('@/assets/img/project_slider_1.png'),
          },
          {
            id: 2,
            src: require('@/assets/img/project_slider_2.png'),
          },
          {
            id: 3,
            src: require('@/assets/img/project_slider_3.png'),
          },
        ],
        showStar: true,
      },
      {
        id: 6,
        img: require('@/assets/img/page_project-2.png'),
        title: 'Minimal Bedroom',
        model: 'Decor / Artchitecture',
        categories: ['Bathroom', 'Kitchan'],
        textFirst:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
        textSecond:
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
        imgSlider: [
          {
            id: 1,
            src: require('@/assets/img/project_slider_1.png'),
          },
          {
            id: 2,
            src: require('@/assets/img/project_slider_2.png'),
          },
          {
            id: 3,
            src: require('@/assets/img/project_slider_3.png'),
          },
        ],
        showStar: false,
      },
      {
        id: 7,
        img: require('@/assets/img/page_project-2.png'),
        title: 'Minimal Bedroom',
        model: 'Decor / Artchitecture',
        categories: ['Bathroom', 'Kitchan'],
        textFirst:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
        textSecond:
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
        imgSlider: [
          {
            id: 1,
            src: require('@/assets/img/project_slider_1.png'),
          },
          {
            id: 2,
            src: require('@/assets/img/project_slider_2.png'),
          },
          {
            id: 3,
            src: require('@/assets/img/project_slider_3.png'),
          },
        ],
        showStar: true,
      },
      {
        id: 8,
        img: require('@/assets/img/page_project-4.png'),
        title: 'Minimal Bedroom',
        model: 'Decor / Artchitecture',
        categories: ['Living Area'],
        textFirst:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
        textSecond:
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
        imgSlider: [
          {
            id: 1,
            src: require('@/assets/img/project_slider_1.png'),
          },
          {
            id: 2,
            src: require('@/assets/img/project_slider_2.png'),
          },
          {
            id: 3,
            src: require('@/assets/img/project_slider_3.png'),
          },
        ],
        showStar: false,
      },
      {
        id: 9,
        img: require('@/assets/img/page_project-5.png'),
        title: 'Minimal Bedroom',
        model: 'Decor / Artchitecture',
        categories: ['Kitchan', 'Living Area'],
        textFirst:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
        textSecond:
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
        imgSlider: [
          {
            id: 1,
            src: require('@/assets/img/project_slider_1.png'),
          },
          {
            id: 2,
            src: require('@/assets/img/project_slider_2.png'),
          },
          {
            id: 3,
            src: require('@/assets/img/project_slider_3.png'),
          },
        ],
        showStar: false,
      },
      {
        id: 10,
        img: require('@/assets/img/page_project-6.png'),
        title: 'Minimal Bedroom',
        model: 'Decor / Artchitecture',
        categories: ['Kitchan'],
        textFirst:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
        textSecond:
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
        imgSlider: [
          {
            id: 1,
            src: require('@/assets/img/project_slider_1.png'),
          },
          {
            id: 2,
            src: require('@/assets/img/project_slider_2.png'),
          },
          {
            id: 3,
            src: require('@/assets/img/project_slider_3.png'),
          },
        ],
        showStar: false,
      },
      {
        id: 11,
        img: require('@/assets/img/page_project-7.png'),
        title: 'Minimal Bedroom',
        model: 'Decor / Artchitecture',
        categories: ['Bathroom', 'Bed Room'],
        textFirst:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
        textSecond:
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
        imgSlider: [
          {
            id: 1,
            src: require('@/assets/img/project_slider_1.png'),
          },
          {
            id: 2,
            src: require('@/assets/img/project_slider_2.png'),
          },
          {
            id: 3,
            src: require('@/assets/img/project_slider_3.png'),
          },
        ],
        showStar: false,
      },
      {
        id: 12,
        img: require('@/assets/img/page_project-8.png'),
        title: 'Minimal Bedroom',
        model: 'Decor / Artchitecture',
        categories: ['Bed Room', 'Living Area'],
        textFirst:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
        textSecond:
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
        imgSlider: [
          {
            id: 1,
            src: require('@/assets/img/project_slider_1.png'),
          },
          {
            id: 2,
            src: require('@/assets/img/project_slider_2.png'),
          },
          {
            id: 3,
            src: require('@/assets/img/project_slider_3.png'),
          },
        ],
        showStar: false,
      },
    ],
  },

  getters: {
    // меню
    getMainMenu: (state) => {
      return state.mainMenu;
    },
    // инфо для баннера блогов
    blogBanner: (state) => state.banners.blog,
    // инфо для баннера проектов
    projectBanner: (state) => state.banners.project,
    // получить все блоги
    getBlogs: (state) => {
      return state.blogs;
    },
    // получить все блоги по количеству
    getBlogsLength: (state) => {
      return state.blogs.length;
    },
    // получить последний блог
    getLastBlog: (state) => {
      return state.blogs[0];
    },
    // получить три блога
    getThreeBlog: (state) => {
      return state.blogs.slice(0, 3);
    },
    // получить блог по id
    getBlogById: (state) => (id) => {
      return state.blogs.find((blog) => blog.id === Number(id));
    },

    // получить все проекты
    getProjects: (state) => {
      return state.projects;
    },
    // получить четыре проекта блога
    getFourProjects: (state) => {
      return state.projects.slice(0, 4);
    },
    // получить проект по id
    getProjectById: (state) => (id) => {
      return state.projects.find((project) => project.id === Number(id));
    },
    // получить проект по категориям
    getProjectByTag: (state) => (category) => {
      return state.projects.filter((project) => {
        if (category === '') {
          return state.projects.slice(0, 6);
        } else {
          return project.categories.includes(category);
        }
      });
    },
    // получить проекты по категориям
    getProjectsTags: (state) => {
      const categories = [];
      state.projects.forEach((el) => {
        categories.push(...el.categories);
      });
      return new Set(categories);
    },
  },
});
