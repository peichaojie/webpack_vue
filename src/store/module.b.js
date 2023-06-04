const ModuleB = {
    namespaced: true,
    state: {
        name: "b张三",
        age: 89,
        hobby: ['bplay', 'bsleep']
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

export default ModuleB;