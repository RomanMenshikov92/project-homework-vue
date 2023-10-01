const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  // publicPath: '/project-homework-vue/',
  publicPath: process.env.NODE_ENV === 'production'
  ? '/project-homework-vue/'
  : '/',
  transpileDependencies: true,
});
