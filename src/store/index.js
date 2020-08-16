import Vue from 'vue';
import Vuex from 'vuex';

import { INCREMENT } from "./mutation-types";

Vue.use(Vuex);

// 通过模块引入
import app from './modules/app'
import user from './modules/user'

const store = new Vuex.Store({
    state: {
        count: 0,
        todos: [
            { id: 1, text: 't1', done: true },
            { id: 2, text: 't2', done: false },
            { id: 3, text: 't3', done: true }
        ],
        someCount: 0
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        getTodoById: (state) => {
            return function (id) {
                return state.todos.find(todo => todo.id === id)
            }
        },
        capitalize(state, getters) {
            const sum = getters.doneTodos;
            const aa = sum.map(item => {
                return item.text.toLocaleUpperCase()
            })
            return aa;
        }
    },
    mutations: {
        [INCREMENT](state, n) {
            state.count += n
        },
        someMutation(state) {
            state.someCount++
        },
        testMutation(state) {
            state.someCount++
        }
    },
    actions: {
        a_increment ({commit}, n) {
            commit('increment', n)
        },
        actionA({commit}) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('someMutation')
                    resolve({id:1})
                }, 1000)
            })
        }

    },
    modules: {
        app,
        user
    }
})

export default store
