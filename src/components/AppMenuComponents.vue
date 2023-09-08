<template>
  <div class="header__menu">
    <nav class="header__menu">
      <ul class="header__menu-list list-reset">
        <li
          class="header__menu-item"
          v-for="(item, index) in menu"
          :key="index"
          @click="getMenuName(index)"
        >
          <a :href="item.href" class="header__menu-link">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppMenuComponent',
  props: ['menu'],
  methods: {
    getMenuName(index) {
      this.$emit('MenuElement', this.menu[index].name);
      console.log(`menu item ${this.menu[index].name}`);
    },
  },
};
</script>

<style scoped lang="sass"></style>
