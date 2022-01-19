<template>
  <div class="container">
    <div class="lang-switch">
        <LocalSwitcher/>
    </div>
    <div class="header">
   <div class="header-image">
     <BaseAppImage
     :width="{ width: '70px'}"
     />
     </div>
     <div class="header-title">
    <h1 class="header-text">{{ title }}</h1>
    </div>
    </div>
    <div class="header-line"></div>
    <div class="search-box">
      <Search :placeholder="$t('main.search_by_name')"/>
    </div>
    <div class="create-note">
      <!-- new note -->
      <h2 class="create-note-title">{{ $t('main.add_note') }}</h2>
      <div class="create-note-line"></div>
      <NewNote/>
    </div>
    <!-- note list-->
    <Notes/>
  </div>
</template>

<script>
import NewNote from "../../components/NewNote.vue";
import Notes from "../../components/Notes";
import Search from "../../components/Search";
import BaseAppImage from '../../components/BaseAppImage'
import LocalSwitcher from '../../components/LocalSwitcher'
import { mapActions } from "vuex";


export default {
  components: {
    NewNote,
    Notes,
    Search,
    BaseAppImage,
    LocalSwitcher
  },
  data() {
    return {
      title: "Notes App"
    };
  },
  methods: {
    ...mapActions({
      fetchPosts: "posts/loadPosts"
    })
  },
  computed: {},
  async mounted() {
    await this.fetchPosts()
  }
};
</script>



<style lang="scss">
@import '../../theme/variables';

.lang-switch {
  display: flex;
  justify-content: right;
  margin: 10px 20px 0 0;
}

.header {
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
  padding-top: 20px;
  &-image {
  }
  &-title {
    display: flex;
    align-items: flex-end;
    padding-top: 25px;
    margin-left: 10px;
  }
}

.header-line {
   border-bottom: 1px solid $base-app-background-gray-light;
   margin: 0 20px 30px 20px;
}

.header-text {
  text-align: center;
}

.create-note {
  max-width: 800px;
  margin: 20px;
  border: 2px solid $base-input-color;
  border-radius: 10px;
  padding: 0 20px 20px 20px;
}

.create-note-title {
  text-align: center;
}

.create-note-line {
  border-bottom: 1px solid $base-input-color;
  margin: 0 0 20px 0;
}

.search-box {
  display: flex;
  justify-content: center;
}
</style>
