const app = {
    state: () => ({
        count: 100,
        countA: 10
    }),
    getters: {
        doubleA(state) {
            return state.countA * 2
        }
    },
    mutations: {
        increment(state, n) {
            console.log('increment', n)
            state.countA += n
        },
        increment_app(state) {
            state.countA++
        }
    },
    actions: {
        actionIncrement({commit}, n) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('increment', n)
                    resolve({id:1})
                }, 1000)
            })
        }
    }
}

export default app
