<template>
  <button-group v-if="user">
    <user :value="user" 
      size="lg" />

    <user :value="user" />

    <user :value="user" 
      size="sm" />
  </button-group>
</template>

<script>
import { 
  mapState
} from 'pinia';
import { userStore } from '../../store/user';

export default {
  name: 'example',

  computed: {
    ...mapState(userStore, {
      user: 'user'
    }),
  },
};
</script>