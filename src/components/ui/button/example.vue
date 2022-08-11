<template>
  <button-group>
    <ui-button color="accent"
      size="sm"
      rounded>
      <ui-glyph />
    </ui-button>

    <ui-button color="success"
      size="lg">
      Success
    </ui-button>
  
    <ui-button color="warning"
      size="lg">
      Warning
    </ui-button>
  
    <ui-button color="error"
      size="lg">
      Error
    </ui-button>
  
    <ui-button disabled
      size="lg">
      Disabled
    </ui-button>
  </button-group>
</template>

<script>
export default {
  name: 'example'
};
</script>