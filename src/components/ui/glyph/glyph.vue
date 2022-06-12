<template>
  <div class="ui-glyph"
    :class="coloring">
    <i :class="icon" 
      :styles="styles" />
  </div>
</template>

<script>
export default {
  name: 'ui-glyph',

  props: {
    name: {
      type: String,
      default: 'vuejs',
    },

    size: {
      type: String,
      default: '14'
    },

    color: {
      type: String,
      default: 'inherit'
    }
  },

  computed: {
    coloring() {
      return `ui-glyph--${this.color}`
    },

    icon() {
      return `mdi mdi-${this.name}`;
    },

    styles() {
      return {
        [`height: ${this.size}px;`]: this.size,
        [`width: ${this.size}px;`]: this.size,
        [`font-size: ${this.size}px;`]: this.size
      }
    }
  }
}
</script>

<style lang="sass" src="./glyph.sass" />