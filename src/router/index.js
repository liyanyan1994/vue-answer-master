import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'home',
        component: resolve => require(['../page/home'], resolve)
    }, {
        path: '/item',
        name: 'item',
        component: resolve => require(['../page/item'], resolve)
    }, {
        path: '/score',
        name: 'score',
        component: resolve => require(['../page/score'], resolve)
    }]
})