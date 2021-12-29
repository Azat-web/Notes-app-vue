<template>
    <div class="notes">
      <div class="note" v-for="(note, index) in notes" :key="index">
        <div class="note-header">
          <p>{{ note.title }}</p>
      </div>
      <div class="note-body">
        <p>{{ note.descr }}</p>
        <span>{{ note.date }}</span>
      </div>
      <div class="note-remove">
          <button @click="deleteNote(index)"> Удалить пост </button>
      </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        notes: {
            type: Array,
            required: true
        }
        
    },
    data() {
        return {        
   
        }
    },
    methods: {
        deleteNote(index) {
            this.$emit('remove', index)
        }
},

}
</script>

<style>
.note {
    border: 2px red solid;
    margin: 20px;
}
</style>
