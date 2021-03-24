import Vue from 'vue'
import Router from 'vue-router'

import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

const components = {
    layout: () =>
        import ('@/pages/layout'),
    index: () =>
        import ('@/pages/index/index'),

}

const router = new Router({
    routes: [{
        path: '/',
        name: 'layout',
        redirect: '/index',
        component: components.layout,
        children: [{
            path: 'index',
            name: 'index',
            component: components.index,
            meta: {
                title: '首页'
            }
        }, ]
    }]
})


/* eslint-disable */
router.beforeEach((to, from, next) => {
    Nprogress.start()
    next()
})

router.afterEach((to, from) => {
    Nprogress.done()
})

/* eslint-disable */

export default router