import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Main from '../components/Main'
import Home from '../components/Home'
import List from '../components/List'
import Mine from '../components/Mine'

const router = new VueRouter({
    routes: [
        {path: '/', name: 'main', component: Main},
        {
            path: '/Home',
            name: 'home',
            component: Home,
            children: [
                {path: '/List', component: List, name: 'list'},
                {path: '/Mine', component: Mine, name: 'mine'}
            ]
        }
    ]
})

export default router