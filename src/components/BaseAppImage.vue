<template>
  <figure class="image-container">
    <img
      class="base-image"
      :style="width"
      src="@/assets/images/notes-app-main.png"
      alt="img">
  </figure>
</template>

<script>
export default {
  name: 'BaseAppImage',
  props: {
    width: {
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../src/theme/theme";
  
 figure {
    margin: 0;
    padding: 0;
 }

  .base-image {
    height: auto;
  }
</style>