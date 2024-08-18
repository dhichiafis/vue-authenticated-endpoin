import {createRouter,createWebHistory} from 'vue-router' 
import store from '../store'
const routes=[
    {
        path:'/',
        name:'home',
        component:()=>import('../Views/HomeView.vue')
    },
    {
        path:'/dashboard',
        name:'dashboard',
        component:()=>import('../Views/DashboardView.vue'),
        meta:{
            requiredLogin:true
        }
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('../Views/LoginView.vue')
    },
    {
        path:'/register',
        name:'register',
        component:()=>import('../Views/RegistrationView.vue')
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})
router.beforeEach((to,from,next)=>{
    if(to.matched.some(record=>record.meta.requiredLogin)&& !store .state.isAuthenticated){
        next('/login')
    }else{
        next()
    }
})
export default router; 