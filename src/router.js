import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '',
    routes: [{
        path: '/',
        name: 'app',
        component: Home
    }, {
        path: '/about/:id',
        name: 'appAbout',
        component: () => import(/* webpackChunkName: "about" */ '@/pages/About'),
        children: [{
            path: 'detail',
            name: 'appDetail',
            component: () => import(/* webpackChunkName: "detail" */ '@/pages/Detail'),
        }]
    }]
})
