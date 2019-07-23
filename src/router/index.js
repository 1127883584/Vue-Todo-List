import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Main from '../components/Main'
import Home from '../components/Home'

const router = new VueRouter({
    routes: [
        {path: '/', name: 'main', component: Main},
        {path: '/Home', name: 'home', component: Home}
    ]
})

export default router