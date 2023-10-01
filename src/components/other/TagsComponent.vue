<template>
  <div class="wrapper">
    <div class="tags">
      <h3 class="tags__title title">Tags</h3>
      <ul class="tags__list list-reset">
        <li
          class="tags__list-item"
          :class="{ 'tags__list-item-clicked': tag === filterItem }"
          v-for="tag in tags"
          :key="tag.id"
        >
          {{ tag }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TagsComponent',
  props: ['tags'],
  data() {
    return {
      filterItem: '',
    };
  },
  methods: {
    // clickTag(tag) {
    //   if (this.filterItem === tag) {
    //     this.filterItem = '';
    //     this.$emit('ClickTag', this.filterItem);
    //   } else {
    //     this.filterItem = tag;
    //     this.$emit('ClickTag', this.filterItem);
    //   }
    // },
  },
};
</script>

<style scoped lang="sass">
@import "./src/assets/sass/components/_tags.sass"
</style>
