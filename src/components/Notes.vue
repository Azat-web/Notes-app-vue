<template>
  <section class="notes">
    <section class="note" v-for="note in notesFilter" :key="note.id">
      <article class="note-header">
        <h3 class="note-header-title">{{ note.title }}</h3>
      </article>
      <div class="note-header-line"></div>
      <article class="note-header-body">
        <p>{{ note.body }}</p>
      </article>
      <div class="note-remove">
        <BaseAppButton 
        @click="deleteNote(note.id)" 
        :title="$t('main.delete')" 
        />
      </div>
    </section>
  </section>
</template>

<script>
import BaseAppButton from "./BaseAppButton.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Notes",
  components: {
    BaseAppButton,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      posts: "posts/getPosts",
      searchPost: "posts/getSearchPost",
    }),
    notesFilter() {
      let array = this.posts;
      let search = this.searchPost;
      if (!search) return array;
      search = search.trim().toLowerCase();
      array = array.filter((item) => {
        if (item.title.toLowerCase().indexOf(search) !== -1) {
          return item;
        }
      });
      return array;
    },
  },
  methods: {
    ...mapActions({
      changePosts: "posts/changePosts",
    }),
    deleteNote(id) {
      const newNotes = [];
      this.posts.forEach((item) => {
        if (item.id !== id) {
          newNotes.push(item);
        }
      });
      this.changePosts(newNotes);
      this.$notify({
          group: 'app',
          type: 'success',
          title: this.$t('main.successfully'),
          text: this.$t('main.note_deleted')
        })
    },
  },
};
</script>

<style lang="scss">
@import '../theme/variables';

.note {
  border: 2px solid $base-input-color;
  border-radius: 10px;
  padding: 15px;
  margin: 20px;
}

.note-header-line {
  border-bottom: 1px solid $base-input-color;
  margin: 0 0 15px 0;
}

.note-header-title:first-letter,
.note-header-body:first-letter {
  text-transform: uppercase;
}

.note-header-title {
}

</style>
