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
            state.countA += n
        },
        increment_app(state) {
            state.countA++
        }
    },
    actions: {

    }
}

export default app
