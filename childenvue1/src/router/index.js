
import Home from '../components/Home.vue'
import HellowWorld from '../components/HelloWorld.vue'

const routes = [{
    path:'/',
    redirect:'/home'
},{
    path:'/home',
    name:'home',
    component:Home
},{
    path:'/hellowWorld',
    name:'HellowWorld',
    component:HellowWorld
}]   



export default routes