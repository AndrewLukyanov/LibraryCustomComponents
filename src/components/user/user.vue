<template>
  <div :class="classes"
    class="user">
    <img :src="value.photo"
      class="user__photo">
  </div>
</template>

<script>
export default {
  name: 'user',

  props: {
    value: {
      type: Object,
      required: true
    },

    size: {
      type: String,
      default: 'md'
    },

    bordered: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    classes() {
      return {
        [`user--${this.size}`]: this.size,
        'user--bordered': this.bordered
      };
    }
  }
};
</script>

<style lang="sass" src="./user.sass" />