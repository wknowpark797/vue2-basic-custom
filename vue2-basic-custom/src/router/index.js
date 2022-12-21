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
            component: () => import(/* webpackChunkName: 'main' */ '../views/MainComp')
        },
        {
            path: '/detail/:seq',
            name: 'detail',
            component: () => import(/* webpackChunkName: 'detail' */ '../views/DetailComp')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: 'login' */ '../views/LoginComp'),
            meta: {
                layout: 'FlatLayout'
            }
        },
        {
            path: '/dev/document',
            name: 'dev-document',
            component: () => import(/* webpackChunkName: 'dev' */ '../components/DevDocument'),
            meta: {
                layout: 'FlatLayout'
            }
        }
    ]
})

export default router;