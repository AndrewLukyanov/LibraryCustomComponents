import { defineStore } from 'pinia';
import { ref } from 'vue';

export const userStore = defineStore('user', () => {
  let user = ref({});

  function get() {
    fetch('https://60639bec-0955-4141-82be-b67023a4835d.mock.pstmn.io/user/1')
      .then(res => res.json())
      .then(data => {
        if (data) {
          return user.value = data;
        }
      });
  }
  get();

  return {
    user
  };
});