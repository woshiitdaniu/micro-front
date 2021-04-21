import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Index from '../components/Index.vue'
Vue.use(VueRouter)
const routes = [{
    path:'/',
    redirect:'/home'
},{
    path:'/home',
    name:'home',
    component:Home
},{
    path:'/index',
    name:'index',
    component:Index
}]

let router = new VueRouter({
    routes,
    mode:'history'
})

export default router