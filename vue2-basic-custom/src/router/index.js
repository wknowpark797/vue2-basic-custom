import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/main'
        },
        {
            path: '/main',
            name: 'main',
            component: () => import(/* webpackChunkName: 'main' */ '@/views/MainComp')
        },
        {
            path: '/detail/:seq',
            name: 'detail',
            component: () => import(/* webpackChunkName: 'detail' */ '@/views/DetailComp')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: 'login' */ '@/views/LoginComp'),
            meta: {
                layout: 'FlatLayout'
            }
        },
        {
            path: '/join',
            name: 'join',
            component: () => import(/* webpackChunkName: 'join' */ '@/views/JoinComp'),
            meta: {
                layout: 'FlatLayout'
            }
        },
        {
            path: '/all-view',
            name: 'all-view',
            component: () => import(/* webpackChunkName: 'detail' */ '@/views/AllViewComp')
        }
    ]
})

export default router;