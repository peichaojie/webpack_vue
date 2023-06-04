import Vue from 'vue';
import App from './App.vue';

import router from "@/router/index.js";
import store from "@/store/index.js";
let root = document.createElement('div');
document.body.appendChild(root);
new Vue({
    render:h=>h(App),
    router,
    store
}).$mount(root);
