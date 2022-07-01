<template>
  <div class="main h-100"
    :class="currentTheme">
    <div class="main__heading d-flex flex-wrap justify-content-between align-items-center">
      <a href="/"
        class="logo d-flex align-items-center">
        <img src="./icons/logo.svg"> LCC
      </a>

      <ui-checkbox :checked="isChecked" 
        @change="toggle" />
    </div>

    <div class="main__content d-flex h-100">
      <sidebar class="p-3" />

      <div class="main__layout p-3">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';

export default {
  name: 'app',

  components: {
    Sidebar
  },

  data() {
    return {
      theme: localStorage.getItem('Theme') || 'light',
      isChecked: false,
    };
  },

  computed: {
    currentTheme() {
      return `main--${this.theme}`;
    }
  },

  mounted() {
    this.isChecked = this.theme == 'dark';
  },

  methods: {
    toggle(event) {
      this.theme = event.target.checked
        ? 'dark'
        : 'light';
      localStorage.setItem('Theme', this.theme);
    }
  }
};
</script>

<style lang="sass">
.main
  &__heading
    padding: 20px
    border-bottom: 1px solid $color-primary

  .logo
    font-size: 16px
    color: $color-primary
    text-decoration: none

    img
      @include square(30px)

  &__layout
    flex: 0 1 100%
    width: 100%

  &--light
    color: #000
    background-color: #fff

  &--dark
    color: #fff
    background-color: lighten(#000, 10%)
</style>