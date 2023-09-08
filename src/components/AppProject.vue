<template>
  <div class="project">
    <div class="project__container container">
      <h2 class="project__title title">Follow Our Projects</h2>
      <p class="project__paragraph paragraph">
        It is a long established fact that a reader will be distracted by the of
        readable content of page lookings at its layouts points.
      </p>
      <ul class="project__list list-reset">
        <li class="project__item">
          <div class="project__wrapper">
            <img
              class="project__wrapper-img project__wrapper-img-top-right"
              src="~@/assets/img/project_1.png"
              alt="First project"
            />
          </div>
          <div class="project__info">
            <div class="project__info-text">
              <p class="project__info-text-name paragraph">Modern Kitchan</p>
              <p class="project__info-text-subname paragraph">
                Decor / Artchitecture
              </p>
            </div>
            <a class="project__link-btn" href="#">
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
            </a>
          </div>
        </li>
        <li class="project__item">
          <div class="project__wrapper">
            <img
              class="project__wrapper-img project__wrapper-img-top-left"
              src="~@/assets/img/project_2.png"
              alt="Second project"
            />
          </div>
          <div class="project__info">
            <div class="project__info-text">
              <p class="project__info-text-name paragraph">Modern Kitchan</p>
              <p class="project__info-text-subname paragraph">
                Decor / Artchitecture
              </p>
            </div>
            <a class="project__link-btn" href="#">
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
            </a>
          </div>
        </li>
        <li class="project__item">
          <div class="project__wrapper">
            <img
              class="project__wrapper-img project__wrapper-img-bottom-right"
              src="~@/assets/img/project_3.png"
              alt="Third project"
            />
          </div>
          <div class="project__info">
            <div class="project__info-text">
              <p class="project__info-text-name paragraph">Modern Kitchan</p>
              <p class="project__info-text-subname paragraph">
                Decor / Artchitecture
              </p>
            </div>
            <a class="project__link-btn" href="#">
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
            </a>
          </div>
        </li>
        <li class="project__item">
          <div class="project__wrapper">
            <img
              class="project__wrapper-img project__wrapper-img-bottom-left"
              src="~@/assets/img/project_4.png"
              alt="Fourth project"
            />
          </div>
          <div class="project__info">
            <div class="project__info-text">
              <p class="project__info-text-name paragraph">Modern Kitchan</p>
              <p class="project__info-text-subname paragraph">
                Decor / Artchitecture
              </p>
            </div>
            <a class="project__link-btn" href="#">
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
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppProject',
};
</script>

<style scoped lang="sass">
@import './src/assets/sass/components/_project.sass'
</style>
