<template>
  <div class="pagination">
    <div
      class="pagination__wrapper"
      @click="clickPagination(i)"
      v-for="i in getPaginationLen + 1"
      :key="i.id"
      :class="{
        current: i === currentPage,
        next: i === getPaginationLen + 1,
      }"
    >
      {{ `${i === getPaginationLen + 1 ? '' : i}` }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginationComponent',
  props: ['currentPage', 'getPaginationLen'],
  methods: {
    clickPagination(start) {
      this.$emit('pagination-click', start);
    },
  },
};
</script>

<style scoped lang="sass">
@import './src/assets/sass/components/_pagination.sass'
</style>
