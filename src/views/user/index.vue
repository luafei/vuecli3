<template>
    <div class="user">
        <h3>User Page</h3>
        <p>{{$route.params.id}}</p>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "index",
        computed: {

        }
    }
</script>

<style scoped>

</style>
