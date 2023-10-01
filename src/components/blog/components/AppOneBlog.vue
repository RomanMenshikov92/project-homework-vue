<template>
  <li class="articlenews__item">
    <article class="articlenews__article">
      <div class="articlenews__wrapper">
        <img
          class="articlenews__wrapper-img"
          :src="blog.img"
          :alt="blog.header"
        />
        <div class="articlenews__wrapper-text">
          {{ blog.badge }}
        </div>
      </div>
      <h3 class="articlenews__subtitle title">
        {{ blog.header }}
      </h3>
      <div class="articlenews__footer">
        <div class="articlenews__date">{{ blog.date }}</div>
        <router-link
          :to="{ name: 'blog-id', params: { id: blog.id } }"
          class="articlenews__link-btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="53"
            viewBox="0 0 52 53"
            fill="none"
          >
            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
            <path
              d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
              stroke="#292F36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
      </div>
    </article>
  </li>
</template>

<script>
export default {
  name: 'AppOneBlog',
  props: ['blog'],
};
</script>

<style scoped lang="sass">
@import './src/assets/sass/components/_articlenews.sass'
</style>
