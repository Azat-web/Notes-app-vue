<template>
  <div id="app">
    <h1>{{ title }}</h1>
 <div class="search-box">
   <Search placeholder="Поиск" @search="searchNotes"/>
   </div>
    <div><Message :message="message"/>
    <!-- new note -->
    <NewNote :notes="notes" @addNote="addNote"/>
    </div>
    <!-- note list-->
    <Notes :notes="notesFilter" @remove="removeNote"/>
  </div>
</template>

<script>
import Message from "./components/Message"
import NewNote from "./components/NewNote"
import Notes from "./components/Notes"
import Search from "./components/Search"

export default {
components: {
  Message,
  NewNote,
  Notes,
  Search
},
data() {
  return {
    title: 'Notes App',
    search: '',
    message: null,
    notes: [
      {
       title: '1',
       descr: 'g',
       date: new Date(Date.now()).toLocaleString()
       },
        {
       title: '2',
       descr: 'g',
       date: new Date(Date.now()).toLocaleString()
       },
        {
       title: '3',
       descr: 'g',
       date: new Date(Date.now()).toLocaleString()
       }
    ]
  }
},
methods: {
  addNote(note) {
   let {title, descr} = note
   if(title === "") {
      this.message = true
      return false
   }
   this.notes.push({
     title: title,
     descr: descr,
     date: new Date(Date.now()).toLocaleString()
   })
   note.title = ''
   note.descr = ''
   this.message = null
},
removeNote(index) {
  this.notes.splice(index, 1)
},
searchNotes(val) {
  this.search = val 
}
},
computed: {
  notesFilter() {
   let array = this.notes
   let search = this.search
   if (!search) return array
   search = search.trim().toLowerCase()
   array = array.filter( (item) => {
     if (item.title.toLowerCase().indexOf(search) !== -1) {
       return item
   } })
   return array
  }
}

}




</script>














<style lang="scss">
.search-box {
  margin: 20px;
}
</style>
