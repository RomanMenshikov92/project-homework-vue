<template>
  <div class="articlenews">
    <div class="articlenews__container container">
      <h2 class="articlenews__title title">Articles & News</h2>
      <p class="articlenews__paragraph paragraph">
        It is a long established fact that a reader will be distracted by the of
        readable content of a page when lookings at its layouts the points of
        using.
      </p>
      <ul class="articlenews__list list-reset">
        <li class="articlenews__item">
          <article class="articlenews__article">
            <div class="articlenews__wrapper">
              <img
                class="articlenews__wrapper-img"
                src="~@/assets/img/article_1.png"
                alt="First article"
              />
              <div class="articlenews__wrapper-text">Kitchan Design</div>
            </div>
            <h3 class="articlenews__subtitle title">
              Let’s Get Solution For Building Construction Work
            </h3>
            <div class="articlenews__footer">
              <div class="articlenews__date">26 December,2022</div>
              <a class="articlenews__link-btn" href="#">
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
              </a>
            </div>
          </article>
        </li>
        <li class="articlenews__item">
          <article class="articlenews__article">
            <div class="articlenews__wrapper">
              <img
                class="articlenews__wrapper-img"
                src="~@/assets/img/article_2.png"
                alt="Second article"
              />
              <div class="articlenews__wrapper-text">Living Design</div>
            </div>
            <h3 class="articlenews__subtitle title">
              Low Cost Latest Invented Interior Designing Ideas.
            </h3>
            <div class="articlenews__footer">
              <div class="articlenews__date">22 December,2022</div>
              <a class="articlenews__link-btn" href="#">
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
              </a>
            </div>
          </article>
        </li>
        <li class="articlenews__item">
          <article class="articlenews__article">
            <div class="articlenews__wrapper">
              <img
                class="articlenews__wrapper-img"
                src="~@/assets/img/article_3.png"
                alt="Third article"
              />
              <div class="articlenews__wrapper-text">Interior Design</div>
            </div>
            <h3 class="articlenews__subtitle title">
              Best For Any Office & Business Interior Solution
            </h3>
            <div class="articlenews__footer">
              <div class="articlenews__date">25 December,2022</div>
              <a class="articlenews__link-btn" href="#">
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
              </a>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppArticleNews',
};
</script>

<style scoped lang="sass">
@import './src/assets/sass/components/_articlenews.sass'
</style>
