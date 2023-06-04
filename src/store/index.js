import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import ModuleA from "./module.a.js";
import ModuleB from "./module.b.js"

const store = new Vuex.Store({
    state: {
        name: "张三",
        age: "18",
        hobby: ['play', 'sleep']
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
    },
    modules: {
        a: ModuleA,
        b: ModuleB
    }
});

export default store;