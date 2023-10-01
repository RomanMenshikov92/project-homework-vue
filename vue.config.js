const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/project-homework-vue/'
  : '/'
});
// module.exports = {
//   css: {
//     loaderOptions: {
//       // передача настроек в sass-loader
//       // @/ это псевдоним к каталогу src/ поэтому предполагается,
//       // что у вас в проекте есть файл `src/variables.scss`
//       // Примечание: эта опция называется "prependData" в sass-loader v8
//       sass: {
//         additionalData: `@import "~@/src/assets/sass/_vars.sass";`,
//         additionalData1: `@import "~@/src/assets/sass/_setting.sass";`,
//         additionalData2: `@import "~@/src/assets/sass/_fonts.sass";`,
//         additionalData3: `@import "~@/src/assets/sass/_mixins.sass";`,
//       },
//       // передача настроек Less.js в less-loader
//     },
//   },
// };
