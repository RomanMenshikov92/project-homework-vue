<template>
  <div class="number">
    <div class="number__container container">
      <ul class="number__list list-reset">
        <li class="number__item">
          <strong class="number__strong">12</strong>
          <div class="number__text">Years Of Experiance</div>
        </li>
        <li class="number__item">
          <strong class="number__strong">85</strong>
          <div class="number__text">Success Project</div>
        </li>
        <li class="number__item">
          <strong class="number__strong">15</strong>
          <div class="number__text">Active Project</div>
        </li>
        <li class="number__item">
          <strong class="number__strong">95</strong>
          <div class="number__text">Happy Customers</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHomeNumber',
};
</script>

<style scoped lang="sass">
@import './src/assets/sass/components/_number.sass'
</style>
