<template>
  <div class="new-note">
    <form @submit.prevent="addNote">
      <BaseAppInput
        :invalid="invalidForm"
        @input="input"
        :placeholder="$t('main.name')"
        inputType="text"
      />
      <p 
      v-if="$v.form.note.title.$dirty && !$v.form.note.title.required" 
      class="invalid-feedback"
      >Это обязательное поле!
      </p>
      <BaseTextArea 
      @input="onInput"
      :placeholder="$t('main.description')"
      />
      <BaseAppButton 
      :title="$t('main.add')" 
      type="submit"
      />
    </form>
  </div>
</template>

<script>
import BaseAppButton from "./BaseAppButton.vue";
import BaseAppInput from "./BaseAppInput.vue";
import BaseTextArea from "./BaseTextArea.vue";
import { validationMixin } from "vuelidate";
import { mapActions, mapGetters } from "vuex";
import { required } from 'vuelidate/lib/validators'

export default {
  name: "NewNote",
  components: {
    BaseAppButton,
    BaseAppInput,
    BaseTextArea,
  },
  props: ["notes"],
  data() {
    return {
      form: {
        note: {
          title: "",
          body: "",
        },
      },
      submitError: null
    };
  },
  validations: {
    form: {
      note: {
        title: { required }
      }
    }
  },
  mixins: [validationMixin],
  computed: {
    ...mapGetters({
      posts: "posts/getPosts",
    }),
    invalidForm () {
      return this.submitError
    }
  },
  methods: {
    ...mapActions({
      changePosts: "posts/changePosts",
    }),
    input(val) {
      this.form.note.title = val;
    },
    onInput(val) {
     
      this.form.note.body = val;
    },
    addNote(event) {
      this.submitError = null
      if (this.$v.form.$error) {
        console.log(this.$v.form.$error)
      }
      let { title, body } = this.form.note;
      const newNotes = this.posts;
      if (title === "") {
        this.$v.form.$touch()
        this.submitError = true
        return false;
      }
      newNotes.unshift({
        title: title,
        body: body,
        id: this.posts.length + 1,
      });
      this.changePosts(newNotes);
      this.form.note.title = "";
      this.form.note.body = "";
      event.target.reset()
      this.$v.$reset()
    },
  },
};
</script>


<style lang="sass">

</style>


