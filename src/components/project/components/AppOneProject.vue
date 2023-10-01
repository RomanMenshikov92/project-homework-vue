<template>
  <li class="project__item">
    <div class="project__wrapper">
      <img
        class="project__wrapper-img"
        :class="getImgClass(0)"
        :src="project.img"
        :alt="project.title"
      />
    </div>
    <div class="project__info">
      <div class="project__info-text">
        <h2 class="project__info-text-name title">{{ project.title }}</h2>
        <p class="project__info-text-subname paragraph">
          {{ project.model }}
        </p>
      </div>
      <router-link
        :to="{ name: 'project-id', params: { id: project.id } }"
        class="project__link-btn"
      >
        <svg
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
          <path
            d="M32 44L40 35L32 26"
            stroke="#292F36"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>
  </li>
</template>

<script>
export default {
  name: 'AppOneProject',
  props: ['project', 'i'],
  methods: {
    getImgClass(i) {
      if (i == 0) {
        return 'project__wrapper-img-top-right';
      } else if (i === 1) {
        return 'project__wrapper-img-top-left';
      } else if (i === 2) {
        return 'project__wrapper-img-bottom-right';
      } else if (i === 3) {
        return 'project__wrapper-img-bottom-left';
      }
    },
  },
};
</script>

<style scoped lang="sass">
@import './src/assets/sass/components/_project.sass'
</style>
