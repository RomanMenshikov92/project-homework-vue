import Vue from 'vue';
import VueRouter from 'vue-router';

import AppHomePage from '@/view/AppHomePage.vue';
import AppBlogPage from '@/view/AppBlogPage.vue';
import AppProjectPage from '@/view/AppProjectPage.vue';
import AppPage404 from '@/view/App404Page.vue';

import AppAboutAllBlogPage from '@/components/blog/page/AppAboutAllBlogPage.vue';
import AppAboutOneBlogPage from '@/components/blog/page/AppAboutOneBlogPage.vue';
import AppAboutAllProjectPage from '@/components/project/page/AppAboutAllProjectPage.vue';
import AppAboutOneProjectPage from '@/components/project/page/AppAboutOneProjectPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: AppHomePage,
  },
  {
    path: '/blog',
    name: '',
    component: AppBlogPage,
    children: [
      {
        path: '',
        name: 'blogs',
        component: AppAboutAllBlogPage,
      },
      {
        path: 'blog-:id',
        name: 'blog-id',
        component: AppAboutOneBlogPage,
      },
    ],
  },
  {
    path: '/project',
    name: '',
    component: AppProjectPage,
    children: [
      {
        path: '',
        name: 'projects',
        component: AppAboutAllProjectPage,
      },
      {
        path: 'project-:id',
        name: 'project-id',
        component: AppAboutOneProjectPage,
      },
    ],
  },
  {
    path: '/404',
    name: 'notfound',
    component: AppPage404,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
