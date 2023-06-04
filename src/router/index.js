import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "@/pages/layout/index.vue";
import Page1 from "@/pages/page1/index.vue";
import Page2 from "@/pages/page2/index.vue"
const router = new VueRouter({
    mode: "history",
    routes: [{
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            component: Home,
            name: 'home',
            children: [{
                path: "Page1",
                component: Page1,
                name: 'Page1',
            },{
                path: "Page2",
                component: Page2,
                name: 'Page2',
            }]
        }
    ]
});

export default router;