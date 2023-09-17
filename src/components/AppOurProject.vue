<template>
  <div class="our-project">
    <div class="our-project__container container">
      <div class="categories-container">
        <div
          class="category"
          :class="{ 'category-clicked': category === filterItem }"
          v-for="category in getCategory"
          :key="category.id"
          @click="clickCategory(category)"
        >
          {{ category }}
        </div>
      </div>
      <div class="projects-container" v-if="showDetails === false">
        <AppProjectComponent
          @showFullProject="showAll"
          v-for="project in filteredItems"
          :key="project.id"
          :project="project"
        >
        </AppProjectComponent>
      </div>
      <div class="projects-container" v-if="showDetails === true">
        <AppProjectComponent @showFullProject="showAll" :blog="filteredProject">
        </AppProjectComponent>
      </div>

      <div class="our-project__pagination">
        <div class="our-project__pagination-wrapper">
          <a href="#" class="our-project__pagination-link">
            <span class="our-project__pagination-link-text">01</span>
          </a>
        </div>
        <div class="our-project__pagination-wrapper">
          <a href="#" class="our-project__pagination-link">
            <span class="our-project__pagination-link-text">02</span>
          </a>
        </div>
        <div class="our-project__pagination-wrapper">
          <a href="#" class="our-project__pagination-link">
            <span class="our-project__pagination-link-text">03</span>
          </a>
        </div>
        <div class="our-project__pagination-wrapper">
          <a href="#" class="our-project__pagination-link">
            <span class="our-project__pagination-link-text">
              <svg
                width="53"
                height="52"
                viewBox="0 0 53 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppProjectComponent from '@/components/AppProjectComponent.vue';

export default {
  name: 'AppOurProject',
  components: {
    AppProjectComponent,
  },
  data: function () {
    return {
      projects: [
        {
          id: 1,
          img: require('@/assets/img/page_project-1.png'),
          title: 'Minimal Bedroom',
          model: 'Decor / Artchitecture',
          categories: ['Living Area', 'Kitchan'],
          showStar: true
        },
        {
          id: 2,
          img: require('@/assets/img/page_project-2.png'),
          title: 'Minimal Bedroom',
          model: 'Decor / Artchitecture',
          categories: ['Bathroom', 'Kitchan'],
          showStar: false
        },
        {
          id: 3,
          img: require('@/assets/img/page_project-3.png'),
          title: 'Minimal Bedroom',
          model: 'Decor / Artchitecture',
          categories: ['Bed Room'],
          showStar: false
        },
        {
          id: 4,
          img: require('@/assets/img/page_project-4.png'),
          title: 'Minimal Bedroom',
          model: 'Decor / Artchitecture',
          categories: ['Living Area'],
          showStar: true
        },
        {
          id: 5,
          img: require('@/assets/img/page_project-5.png'),
          title: 'Minimal Bedroom',
          model: 'Decor / Artchitecture',
          categories: ['Kitchan', 'Living Area'],
          showStar: false
        },
        {
          id: 6,
          img: require('@/assets/img/page_project-6.png'),
          title: 'Minimal Bedroom',
          model: 'Decor / Artchitecture',
          categories: ['Kitchan'],
          showStar: false
        },
        {
          id: 7,
          img: require('@/assets/img/page_project-7.png'),
          title: 'Minimal Bedroom',
          model: 'Decor / Artchitecture',
          categories: ['Bathroom', 'Bed Room'],
          showStar: false
        },
        {
          id: 8,
          img: require('@/assets/img/page_project-8.png'),
          title: 'Minimal Bedroom',
          model: 'Decor / Artchitecture',
          categories: ['Bed Room', 'Living Area'],
          showStar: false
        },
      ],
      filterItem: '',
      filterId: '',
      showDetails: false,
    };
  },

  computed: {
    getCategory() {
      const categories = [];
      this.projects.forEach((el) => {
        categories.push(...el.categories);
      });
      return new Set(categories);
    },

    filteredItems() {
      return this.projects.filter((project) => {
        if (this.filterItem === '') {
          return this.projects;
        } else {
          return project.categories.includes(this.filterItem);
        }
      });
    },

    filteredProject() {
      const project = this.projects.filter((project) => {
        return project.id === Number(this.filterId);
      });

      return project[0];
    },
  },

  methods: {
    clickCategory(category) {
      if (this.filterItem === category) {
        this.filterItem = '';
      } else {
        this.filterItem = category;
      }
    },
    showAll(id) {
      this.filterId === id ? (this.filterId = '') : (this.filterId = id);
      this.showDetails = !this.showDetails;
    },
  },
};
</script>

<style scoped lang="sass">
@import './src/assets/sass/components/_our-project.sass'
</style>
