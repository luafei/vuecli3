<template>
    <div class="user">
        <div class="top">
            <button @click="goPosts">邮政</button>
            <button @click="goProfile">profile</button>
        </div>

        <div class="main-container">
            <keep-alive>
                <router-view> <!-- 所有路径匹配到的视图组件都会被缓存！ --></router-view>
            </keep-alive>
<!--            <router-view></router-view>-->

        </div>

    </div>
</template>

<script>
    export default {
        name: "index",
        methods: {
            goPosts() {
                this.$router.push({
                    name: 'posts'
                })
            },
            goProfile() {
                this.$router.push({
                    name: 'profile'
                })
            }
        }
    }
</script>

<style scoped>
    .user {
        position: relative;
        height: 100vh;
    }
    .top {
        position: fixed;
        top: 0;
        width: 100%;
        height: auto;
    }
    .main-container {
        position: absolute;
        top: 50px;
        overflow-y: scroll;
        width: 100%;
        bottom: 0;
    }
</style>
