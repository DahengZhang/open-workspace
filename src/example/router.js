import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/example/pages/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: 'example',
    routes: [{
        path: '/',
        name: 'example',
        component: Home
    }, {
        path: '/about',
        name: 'exampleAbout',
        component: () => import(/* webpackChunkName: "example/about" */ '@/example/pages/About')
    }]
})
