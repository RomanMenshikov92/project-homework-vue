<template>
  <div class="header__logo footer__logo">
    <a class="header__logo-link footer__logo-link" :href="logo.href">
      <img class="header__logo-img footer__logo-img" src="@/assets/Logo.svg" alt="logo" />
    </a>
  </div>
</template>

<script>
export default {
  name: "AppLogoComponents",
  props: ["logo"],
};
</script>

<style scoped lang="sass"></style>
