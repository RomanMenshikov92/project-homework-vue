const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  // publicPath: '/project-homework-vue/',
  baseUrl:
    process.env.NODE_ENV === 'production' ? '/project-homework-vue/' : '/',
  transpileDependencies: true,
});
