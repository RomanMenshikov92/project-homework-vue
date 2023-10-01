<template>
  <div class="project">
    <div class="project__container container">
      <h2 class="project__title title">Follow Our Projects</h2>
      <p class="project__paragraph paragraph">
        It is a long established fact that a reader will be distracted by the of
        readable content of page lookings at its layouts points.
      </p>
      <ul class="project__list list-reset">
        <AppOneProject
          v-for="(project, i) in projects"
          :key="i"
          :project="project"
        ></AppOneProject>
      </ul>
    </div>
  </div>
</template>

<script>
import AppOneProject from '@/components/project/components/AppOneProject.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'AppProjects',
  components: { AppOneProject },
  data() {
    return {
      projects: [],
    };
  },
  computed: {
    ...mapGetters(['getFourProjects']),
  },
  mounted() {
    this.projects = this.getFourProjects;
  },
};
</script>

<style scoped lang="sass">
@import './src/assets/sass/components/_project.sass'
</style>
