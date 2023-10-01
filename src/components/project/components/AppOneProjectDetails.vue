<template>
  <div class="project-details__text">
    <h2 class="project-details__text-title title">
      {{ project.title + ' # ' + project.id }}
    </h2>
    <p class="project-details__text-paragraph paragraph">
      {{ project.textFirst }}
    </p>

    <p class="project-details__text-paragraph paragraph">
      {{ project.textSecond }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'AppOneProjectDetails',
  props: ['project'],
};
</script>

<style scoped lang="sass">
@import "./src/assets/sass/components/_project-details.sass"
</style>
