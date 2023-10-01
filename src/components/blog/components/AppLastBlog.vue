<template>
  <article class="articlenews-blog__last-post-article">
    <img
      :src="blog.img"
      :alt="blog.title"
      class="articlenews-blog__last-post-img"
    />
    <div class="articlenews-blog__last-post-text">
      <h3 class="articlenews-blog__last-post-subtitle title">
        {{ blog.header }}
      </h3>
      <p class="articlenews-blog__last-post-description paragraph">
        {{ blog.textLastPost }}
      </p>
      <div class="articlenews-blog__last-post-footer">
        <div class="articlenews-blog__last-post-date">
          {{ blog.date }}
        </div>
        <router-link
          :to="{ name: 'blog-id', params: { id: blog.id } }"
          class="articlenews-blog__last-post-link-btn"
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
    </div>
  </article>
</template>

<script>
export default {
  name: 'AppLastBlog',
  props: ['blog'],
};
</script>

<style scoped lang="sass">
@import './src/assets/sass/components/_articlenews-blog.sass'
</style>
