<template>
    <div class="userPosts">
        <p>user posts</p>
        <div v-if="showA">showA</div>
        <div v-else style="color: red">showB</div>
        <button @click="show">show</button>
        <img src="@/assets/img/cartoon1.jpg" alt="">
        <img src="@/assets/img/cartoon2.jpg" alt="">
        <img src="@/assets/img/cartoon3.jpg" alt="">
        <img src="@/assets/img/cartoon1.jpg" alt="">
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
          return {
              showA: true
          }
        },
        created() {
            console.log('userPosts created')
        },
        destroyed() {
            console.log('posts destory')
        },
        methods: {
            show() {
                this.showA = !this.showA;
            }
        }
    }
</script>s

<style scoped>

</style>
