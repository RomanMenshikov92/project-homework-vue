<template>
  <div class="header__menu">
    <nav class="header__menu">
      <ul class="header__menu-list list-reset">
        <li
          class="header__menu-item"
          v-for="(item, index) in menu"
          :key="index"
        >
          <router-link :to="item.href" class="header__menu-link">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppMenuComponent',
  props: ['menu'],
};
</script>

<style scoped lang="sass"></style>
