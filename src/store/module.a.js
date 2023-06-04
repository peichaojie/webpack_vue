const ModuleA = {
    namespaced: true,
    state: {
        name: "a张三",
        age: 56,
        hobby: ['aplay', 'asleep']
    },
    mutation: {
        addAge(state) {
            state.age++
        },
        setHobby(state, item) {
            state.hobby.push(item)
        }
    },
    action: {
        syncSetHobby({ commit }, item) {
            setTimeout(() => {
                commit('setHobby', item)
            }, 1000)
        }
    },
    getter: {
        getName(state) {
            return 'my goodfrinend is' + state.name;
        },
        favoriteHobby: (state) => (item) => state.hobby.include(item)
    }
};

export default ModuleA;