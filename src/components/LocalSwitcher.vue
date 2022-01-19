<template>
  <div class="locale-switcher">
    <div class="select" @mouseleave="handlerVisibleOptions">
      <div class="select-header" @mouseenter="handlerVisibleOptions">
        <div class="select-title">{{ $t('main.language') }}</div>
        <img
          class="select-img"
          src="../assets/images/Russia.png"
          alt="Russia"
          v-if="selectedlocale === 2"
        />
        <img
          class="select-img"
          src="../assets/images/USA.png"
          alt="USA"
          v-else
        />
      </div>
      <div class="options" v-if="isVisibleOptions">
        <p v-for="locale in locales" :key="locale" @click="switchLang(locale)">
          {{ locale.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocalSwitcher',
  components: {},
  data() {
    return {
      isVisibleOptions: false,
      selectedlocale: 1,
      locales: [
        { name: 'English', lang: 'en', value: 1 },
        { name: 'Русский', lang: 'ru', value: 2 }
      ]
    }
  },
  methods: {
    handlerVisibleOptions() {
      this.isVisibleOptions = !this.isVisibleOptions
    },
    switchLang(locale) {
      if (this.$i18n.locale !== locale.lang) {
        this.$i18n.locale = locale.lang
      }
      this.isVisibleOptions = false
      this.selectedlocale = locale.value
    }
  }
}
</script>

<style lang="scss">
@import '../theme/variables';

.select {
  width: 200px;
  position: relative;
  &-title {
    margin: 0;
    text-align: center;
  }
  &-header {
    display: flex;
    border-bottom: solid 1px $base-app-background-gray-light;
    justify-content: center;
    align-items: center;
  }
  &-img {
    width: 20px;
    height: 10px;
    margin: 0;
    padding: 3px 0 0 10px;
  }
  & p:hover {
    cursor: pointer;
  }

  .options {
    position: absolute;
    width: 100%;
    background-color: $base-input-color;
    text-align: center;
    border-radius: 5px;
    & p:hover {
      color: $base-blue-color;
      cursor: pointer;
    }
  }
}
</style>
