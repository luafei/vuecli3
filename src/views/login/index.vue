<template>
    <div class="login">

    </div>
</template>

<script>
    export default {
        name: "index",
        created() {
            console.log(111)
            console.log(222)
            console.log(333)
            console.log('views/login/index edwin')
        },
        methods: {
            goHome() {
                this.$router.push('home')
            },
            goUser(id) {
                this.$router.push(`user`)
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
            },
            goTab() {
                this.$router.push({
                    name: 'tab'
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .login {
        position: absolute;
        left: 0;
        right: 0;
        height: 100vh;
        button {
            color: red;
        }
    }
</style>
