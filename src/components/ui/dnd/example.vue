<template>
  <ui-dnd :items="items"
    @drop="onDrop">
    <template v-slot:default="item">
      {{ item.Title }}
    </template>
  </ui-dnd>
</template>

<script>
export default {
  name: 'example',

  data() {
    return {
      items: [
        {
          id: 0,
          Position: 0,
          Title: 'Lorem ipsum dolor sit.'
        },
        {
          id: 1,
          Position: 1,
          Title: 'Sed ut perspiciatis unde omnis iste natus.'
        },
        {
          id: 2,
          Position: 2,
          Title: 'But I must explain to you how all this mistaken idea.'
        }
      ]
    };
  },

  methods: {
    onDrop(result) {
      this.items = this.applyDrag(this.items, result);
    },

    applyDrag(array, dragResult) {
      const { removedIndex, addedIndex, payload } = dragResult;
      const result = [...array];
      let itemToAdd = payload;

      if (removedIndex === null && addedIndex === null) {
        return array;
      }

      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
      }

      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
      }

      return result;
    }
  }
};
</script>