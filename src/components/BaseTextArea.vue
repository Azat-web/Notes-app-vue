<template>
  <div class="textarea-container">
    <textarea
      class="textarea"
      :class="{ disabled: disabled }"
      @input="onInput"
      :disabled="disabled"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "BaseTextArea",
  components: {},
  props: {
    all_option: {
      type: Boolean,
      default: true,
    },
    nextParagraph: {
      type: Array,
    },
    maxLetters: {
      type: Number,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
    }
  },
  watch: {},
  data() {
    return {};
  },
  computed: {
    showLettersLimit: function () {
      return this.maxLetters || "∞";
    },
  },
  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>
<style scoped lang="scss">
@import '../theme/variables';

.textarea-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 10px 0 20px 0;
  padding: 15px 0 60px 0;
  border-radius: 10px;
  background-color: $base-input-color;
  .disabled {
    opacity: 0.7;
    cursor: none;
    pointer-events: none;
  }
  .textarea-control {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    padding: 15px 20px 10px 20px;
    box-sizing: border-box;
    border-top: 1px solid lightgray;
    bottom: 5px;
    .submit-arrow {
      cursor: pointer;
      svg {
        fill: lightgray;
        &:hover {
          fill: black;
        }
      }
    }
    .textarea-control__item {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 14px;
      color: lightgray;
    }
    .timer {
      min-width: 100px;
    }
  }
  .textarea {
    width: 100%;
    max-width: 800px;
    height: 180px;
    resize: none;
    border: none;
    outline: none;
    box-sizing: border-box;
    background-color: transparent;
    padding: 0 20px;
    font-size: 14px;
    line-height: 22px;
    color: $base-text-white;
    &.disabled {
      opacity: 0.7;
      cursor: none;
      pointer-events: none;
    }
  }
}
@media screen and (max-width: 426px) {
  .textarea-container {
    max-width: 390px;
  }
}
@media screen and (max-width: 376px) {
  .textarea-container {
    max-width: 340px;
  }
}
@media screen and (max-width: 322px) {
  .textarea-container {
    max-width: 300px;
  }
}
</style>