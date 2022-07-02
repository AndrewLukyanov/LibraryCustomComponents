<template>
  <ui-button color="accent"
    size="sm"
    rounded>
    <ui-glyph />
  </ui-button>

  <br>
  
  <ui-button color="success"
    size="lg">
    Success
  </ui-button>

  <br>
  
  <ui-button color="warning"
    size="lg">
    Warning
  </ui-button>

  <br>
  
  <ui-button color="error"
    size="lg">
    Error
  </ui-button>

  <br>
  
  <ui-button disabled
    size="lg">
    Disabled
  </ui-button>
</template>

<script>
export default {
  name: 'page-button'
};
</script>