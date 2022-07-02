<template>
  <ui-checkbox :checked="active" 
    @change="toggle">
    Switch
  </ui-checkbox>
</template>

<script>
export default {
  name: 'example',

  data() {
    return {
      active: true
    };
  },

  methods: {
    toggle() {
      this.active = !this.active;
    }
  }
};
</script>