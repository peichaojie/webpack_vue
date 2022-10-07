import { add, minus } from '@/plugin/math.js';
import Vue from 'vue';
import App from './App.vue';
console.log(add(5, 4));
console.log(minus(5, 4));
console.log(Array.from(new Set([1, 2, 3])));
let box = document.createElement('div');
document.body.appendChild(box);
new Vue({
    template: '<App></App>',
    // 引入组件
    components: {
        App
    }
}).$mount(box);
