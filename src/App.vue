<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import TestDirective from './components/TestDirective'
    import HelloWorld from './components/HelloWorld'
    import treeTest from './components/treeTest'
    import Home from './views/home/index'

    var mixin = {
        data: function () {
            return {
                message: 'mixin hello',
                foo: 'abc'
            }
        }
    }
    export default {
        name: 'App',
        mixins: [mixin],
        components: {
            TestDirective,
            HelloWorld,
            treeTest,
            Home
        },
        mounted() {
            console.log('$msg', this.$msg)
        }
    }
</script>

<style>
    @import "./assets/css/normalize.css";
</style>
