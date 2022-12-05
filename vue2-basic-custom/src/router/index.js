import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/dev/document'
        },
        {
            path: '/dev/document',
            name: 'dev-document',
            component: () => import(/* webpackChunkName: 'dev' */ '../components/DevDocument')
        }
    ]
})

export default router;