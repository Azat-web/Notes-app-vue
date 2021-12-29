<template>
    <div class="message" v-if="message" >
   title не может быть пустым!
    </div>
</template>

<script>
export default {
 props: {
    message: {
        type: String,
        required: true
    } 
 }
}

</script>














<style lang="scss">
</style>
