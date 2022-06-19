<template>
  <div class="main"
    :class="currentTheme">
    <div class="main__heading">
      <a href="/"
        class="logo">
        <img src="./icons/logo.svg"> LCC
      </a>
    </div>

    <ui-checkbox :checked="isChecked" 
      @change="toggle">
      Theme switch
    </ui-checkbox>
  </div>
</template>

<script>
export default {
  name: 'app',

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

  .logo img
    height: 30px
    width: 30px

  &--light
    color: #000
    background-color: #fff

  &--dark
    color: #fff
    background-color: #000
</style>