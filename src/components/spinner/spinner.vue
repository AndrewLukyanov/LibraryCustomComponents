<template>
  <div class="spinner"
    :class="classes">
    <svg viewBox="0 0 50 50">
      <circle cx="25"
        cy="25"
        r="20"
        fill="transparent"
        stroke="currentColor"
        stroke-width="5" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'spinner',

  props: {
    color: {
      type: String,
      default: 'accent'
    },

    size: {
      type: String,
      default: 'md'
    }
  },

  computed: {
    classes() {
      return {
        [`spinner--${this.color}`]: this.color,
        [`spinner--${this.size}`]: this.size
      };
    }
  }
};
</script>

<style lang="sass" src="./spinner.sass" />