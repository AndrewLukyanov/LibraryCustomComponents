<template>
  <div class="sidebar">
    <ul class="d-flex flex-wrap flex-column list-unstyled my-n2 mx-0 p-0">
      <li v-for="(component, index) in components" 
        :key="index" 
        class="py-2">
        <router-link :to="component.to"
          v-text="component.name" />
      </li>
    </ul>
  </div>
</template>

<script>
import { Components } from './components/index';

export default {
  name: 'sidebar',

  data() {
    return {
      components: Components
    };
  },
};
</script>

<style lang="sass">
.sidebar
  flex: 0 0 320px
  width: 300px
  border-right: 1px solid $color-primary
</style>