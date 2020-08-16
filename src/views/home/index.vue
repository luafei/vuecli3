<template>
    <div class="test">
        <!-- simple vuex -->
        <h3>state 用法 -{{title}}</h3>
        <p>simple vuex state</p>
        <p>store.state中的count: {{$store.state.count}}</p>
        <p>mapState用法1 {{count}}</p>
        <p>mapState用法2 {{countAlias}}</p>
        <p>mapState用法3 {{countPlusLocalState}}</p>
        <h3>getter 用法</h3>
        <p>{{doneTodos}}</p>
        <p>{{$store.getters.getTodoById(2)}}</p>
        <p>{{getTodoById(1)}}</p>
        <p>{{$store.getters.capitalize}}</p>
        <h3>mutations 用法</h3>
        <button @click="add(5)">add</button>
        <button @click="increment(10)">increment</button>
        <h3>actions 用法</h3>
        <p>{{$store.state.someCount}}</p>
        <button @click="async_add(100)">action add0</button>
        <button @click="a_increment(200)">action add1</button>
        <button @click="aadd(300)">action add2</button>
        <button @click="actionA">actionA</button>
        <h3>modules 用法</h3>
        <p>{{$store.state.app.countA}}</p>
        <button @click="m_add_app">m_add_app</button>
<!--        <p>{{$store.getters.app.doubleA}}</p>-->
    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

    export default {
        name: "Home",
        data() {
            return {
                title: 'home views 123',
                counts: this.$store.state.count,
                localCount: 100
            }
        },
        computed: {
            ...mapState({
                // mapState 相当于一个简写方式,作用于state
                count: state => state.count,
                countAlias: 'count',
                countPlusLocalState(state) {
                    return state.count + this.localCount
                }
            }),
            doneTodos() {
                return this.$store.getters.doneTodos
            },
            ...mapGetters([
                'getTodoById'   // 把 `this.getTodoById` 映射为 `this.$store.getters.getTodoById`
            ])
        },
        methods: {
            add(param) {
              this.$store.commit('increment', param)
            },
            ...mapMutations([
                'increment'  // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
            ]),
            async_add(param) {
                this.$store.dispatch('a_increment', param)
            },
            ...mapActions([
                'a_increment'   // 将 `this.a_increment()` 映射为 `this.$store.dispatch('a_increment')`
            ]),
            ...mapActions({
                aadd: 'a_increment'
            }),
            actionA() {
                this.$store.dispatch('actionA').then(data => {
                    console.log('actionA 中返回的data', data)
                })
            },
            m_add_app() {
                this.$store.commit('increment', 5)
            }
        },
        created() {
            console.log('test')
        }
    }
</script>

<style scoped>

</style>
