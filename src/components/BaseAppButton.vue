<template>
  <button
    v-if="!isTurnOn"
    :type="type"
    class="base-button font-open-sans bold sm-size uppercase"
    :class="{
      disabled: disabled,
      accept: mode === 'accept',
      white: mode === 'white',
      complete: mode === 'complete',
      'dark-btn': mode === 'claim' || mode === 'join',
    }"
    @click="$emit('click')"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "BaseAppButton",
  props: {
    title: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isTurnOn: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: "",
    },
    type: {
      type: String
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../theme/variables";

.base-button {
  width: 290px;
  height: 45px;
  cursor: pointer;
  background: $base-blue-color;
  color: black;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 7px 12px;
  margin: 5px 0;
  outline: none;
  border: 0;
  position: relative;
  transition: all 150ms linear;
  &:hover {
    background-color: darken($base-blue-color, 5%);
  }
  &.disabled {
    cursor: none;
    pointer-events: none;
    background-color: desaturate($base-blue-color, 60%);
  }
}
.base-button.accept {
  background: #6fcf97;
  &:hover {
    background-color: darken(#6fcf97, 5%);
  }
  &.disabled {
    background-color: desaturate(#6fcf97, 60%);
  }
}
.base-button.white {
  background-color: #f2f2f2;
  &:hover {
    background-color: darken(#f2f2f2, 5%);
  }
  &.disabled {
    background-color: desaturate(#f2f2f2, 60%);
  }
}
</style>