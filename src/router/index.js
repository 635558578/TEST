import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import forget from '../components/forget.vue'
import registe from '../components/registe.vue'
import Test1 from '../components/Test1.vue'
import Test1_result from '../components/Test1_result.vue'
import Test2 from '../components/Test2.vue'
import Test2_result from '../components/Test2_result.vue'
import Test3 from '../components/Test3.vue'
import Test3_result from '../components/Test3_result.vue'
import introduction from '../components/introduction.vue'
import selfinformation from '../components/selfinformation.vue'
import beforeTest from '../components/beforeTest.vue'

import Testintroduction from '../components/Testintroduction.vue'
Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: login },
    { path: '/forget', component: forget },
    { path: '/registe', component: registe },
    { path: '/Test1', component: Test1 },
    { path: '/Test1_result', component: Test1_result },
    { path: '/Test2', component: Test2 },
    { path: '/Test2_result', component: Test2_result },
    { path: '/Test3', component: Test3 },
    { path: '/Test3_result', component: Test3_result },
    { path: '/introduction', component: introduction },
    { path: '/selfinformation', component: selfinformation },
    { path: '/beforeTest', component: beforeTest },
    { path: '/Testintroduction', component: Testintroduction },
]

const router = new VueRouter({
    routes
})

export default router