<template>
    <div class="userProfile">
        <p>user profile</p>
    </div>
</template>

<script>
    export default {
        name: "index",
        created() {
            console.log(`userProfile created`)
        },
        destroyed() {
            console.log('userProfile destory')
        }
    }
</script>

<style scoped>

</style>
