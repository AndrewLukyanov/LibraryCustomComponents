<template>
  <div class="progress-bar">
    <div v-if="percentage"
      :style="width"
      class="progress-bar__inner">
      <div class="progress-bar__text">
        {{ `${percentage}%` }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'progress-bar',

  props: {
    percentage: {
      type: Number,
      default: 0
    }
  },

  computed: {
    width() {
      return {
        width: `${this.percentage}%`
      }
    }
  }
};
</script>

<style lang="sass" src="./progress-bar.sass" />