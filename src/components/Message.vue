<template>
  <article class="message" v-if="message">title не может быть пустым!</article>
</template>

<script>
export default {
  props: {
    message: {
      type: Boolean,
      required: true,
    },
  },
};
</script>














<style lang="scss">
</style>
