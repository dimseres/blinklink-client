import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/link',
        name: 'LinkPage',
        component: () => import(/* webpackChunkName: "loginPage" */ '../components/MainLayout'),
        children: [
            {
                path: '/all',
                name: 'UserSpace',
                component: () => import(/* webpackChunkName: "userPage" */ '../views/UserPage')
            },
            {
                path: '/link/:uuid',
                name: 'LinkPage',
                component: () => import(/* webpackChunkName: "loginPage" */ '../views/LinkPage')
            }
        ],
    },
    // {
    //     path: '/link/:uuid',
    //     name: 'LinkPage',
    //     component: () => import(/* webpackChunkName: "loginPage" */ '../views/LinkPage')
    // },
    {
        path: '/test',
        name: 'TestPage',
        component: () => import(/* webpackChunkName: "loginPage" */ '../views/Test')
    },
    {
        path: '/auth',
        name: 'AuthPage',
        component: () => import(/* webpackChunkName: "authPage" */ '../views/Auth')
    },
    // {
    //     path: '/myspace',
    //     name: 'UserSpace',
    //     component: () => import(/* webpackChunkName: "userPage" */ '../views/UserPage')
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
