<template>
  <div class="wrapper" id="app">
    <notifications group="auth" position="center top"/>
    <notifications group="app" position="center top"/>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
  },
  computed: {},
  async mounted() {
  }
};
</script>

<style lang="scss">
@import "./theme/variables";
@import "./theme/theme";


body,html {
    margin: 0;
    padding: 0;
    background-color: $base-app-background-gray;
  }

  #app {
    display: block;
    font-family: 'Merriweather', serif;
    margin: 0;
    padding: 0 0 64px 0;
    box-sizing: border-box;
    min-height: calc(100 * var(--vh));
    color: $base-text-white;
    width: 100%;
  }

</style>
