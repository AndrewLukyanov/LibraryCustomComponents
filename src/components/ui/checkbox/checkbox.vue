<template>
  <div class="ui-checkbox">
    <input :id="id"
      :checked="checked"
      type="checkbox">
    <label :for="id"
      class="ui-checkbox__label">
      <span class="ui-checkbox__text">
        <slot />
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'ui-checkbox',

  model: {
    event: 'change'
  },

  props: {
    checked: {
      type: Boolean,
      required: true,
    }
  },

  data() {
    return {
      id: 'checkbox_' + Math.random().toString(36).substring(2, 15)
    };
  },
};
</script>

<style lang="sass" src="./checkbox.sass" />