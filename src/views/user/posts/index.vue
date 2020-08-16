<template>
    <div class="userPosts">
        <p>user posts</p>
    </div>
</template>

<script>
    export default {
        name: "index",
        created() {
            console.log('query', this.$route.query)
        }
    }
</script>

<style scoped>

</style>
