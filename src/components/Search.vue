<template>
    <div class="search">
      <input type="text" v-model="value" :placeholder="placeholder">
    </div>
</template>

<script>
export default {
    props: { 
        placeholder: {
            type: String 
        }
    },
    data() {
      return {
          value: ''
        }
    },
    methods: {
    
},
watch: {
    value(val) {
        this.$emit("search", val)
    }
}

}
</script>

<style>
.note {
    border: 2px red solid;
    margin: 20px;
}
</style>
