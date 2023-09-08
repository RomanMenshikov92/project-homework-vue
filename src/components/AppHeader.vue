<template>
  <div class="header">
    <div class="header__container container">
      <AppLogoComponents :logo="logo" />
      <AppMenuComponents @MenuElement="chooseElement" :menu="menu" />
    </div>
  </div>
</template>

<script>
import AppLogoComponents from '@/components/AppLogoComponents.vue';
import AppMenuComponents from '@/components/AppMenuComponents.vue';
import img from '@/assets/Logo.svg';

export default {
  name: 'AppHeader',
  methods: {
    chooseElement(nameMenu) {
      // this.activeElem = name
      this.$emit('MenuElement', nameMenu);
      console.log(`header ${nameMenu}`);
    },
  },
  data() {
    return {
      menu: [
        {
          name: 'Home',
          href: '#',
        },
        {
          name: 'Project',
          href: '#',
        },
        {
          name: 'Blog',
          href: '#',
        },
      ],
      logo: {
        header: 'Interno',
        href: '#',
        img,
      },
    };
  },
  components: {
    AppLogoComponents,
    AppMenuComponents,
  },
};
</script>

<style scoped lang="sass">
@import "./src/assets/sass/components/_header.sass"
</style>
