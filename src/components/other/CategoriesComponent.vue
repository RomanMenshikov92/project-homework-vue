<template>
  <div class="wrapper">
    <ul class="categories__list list-reset">
      <li
        class="categories__list-item"
        :class="{ 'categories__list-item-clicked': category === filterItem }"
        v-for="category in categories"
        :key="category.id"
        @click="clickCategory(category)"
      >
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CategoriesComponent',
  props: ['categories'],
  data() {
    return {
      filterItem: '',
    };
  },
  methods: {
    clickCategory(category) {
      if (this.filterItem === category) {
        this.filterItem = '';
        this.$emit('ClickCategory', this.filterItem);
      } else {
        this.filterItem = category;
        this.$emit('ClickCategory', this.filterItem);
      }
    },
  },
};
</script>

<style scoped lang="sass">
@import "./src/assets/sass/components/_categories.sass"
</style>
