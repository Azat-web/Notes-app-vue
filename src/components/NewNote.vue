<template>
    <div class="new-note">
      <input v-model="note.title" type="text">
      <textarea v-model="note.descr"></textarea>
      <button @click="addNote"></button>
    </div>
</template>

<script>
export default {
    props: {
        notes: {
            type: Array
        }
    },
    data() {
        return {        
    note: {
      title: '',
      descr: ''
    },
        }
    },
    methods: {
        addNote() {
            this.$emit('addNote', this.note)
        }

},

}
</script>





