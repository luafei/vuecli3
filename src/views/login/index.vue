<template>
    <div class="login">
        <p>login page</p>
        <button @click="goHome">跳转home页</button>
        <button @click="goUser(100)">跳转用户页</button>
        <button @click="goUserProfile(200)">跳转到用户profile</button>
        <button @click="goUserPosts(200)">跳转到用户posts</button>
    </div>
</template>

<script>
    export default {
        name: "index",
        created() {
            console.log('views/login/index')
        },
        methods: {
            goHome() {
                this.$router.push('home')
            },
            goUser(id) {
                this.$router.push(`user/${id}`)
            },
            goUserProfile(id) {
                this.$router.push({
                    name: 'profile',
                    params: {
                        name: 'profile的测试数据',
                        sex: 'M'
                    }
                })
            },
            goUserPosts(id) {
                this.$router.push({
                    name: 'posts',
                    query: {
                        name: 'posts测试数据',
                        sex: 'W'
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .login {
        width: 100%;
        height: 100%;
    }
</style>
