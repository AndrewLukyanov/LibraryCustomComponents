<template>
  <div class="ui-progress-bar">
    <div v-if="percentage"
      :style="width"
      class="ui-progress-bar__inner">
      <div class="ui-progress-bar__text">
        {{ `${percentage}%` }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-progress-bar',

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
      };
    }
  }
};
</script>

<style lang="sass" src="./progress-bar.sass" />