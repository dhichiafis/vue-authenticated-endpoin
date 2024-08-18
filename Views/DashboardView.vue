<script setup>
import { useRouter } from "vue-router";
import AuthLayoutVue from "../layout/AuthLayout.vue";
import axios from 'axios'
import { onBeforeMount } from "vue";
import {reactive} from 'vue'
import { useStore } from "vuex";
const router=useRouter()
const store=useStore()
const home=()=>{
    router.push('/')
}
const user=store.state.user 

onBeforeMount(()=>{
    const accessToken=localStorage.getItem('token')
    let user={}
            axios.get('http://localhost:8008/users/users/me/',{
                headers:{
                    'Content-Type':'application/json',
                    Authorization: `Bearer ${accessToken}`,
                }
            }).then(response=>{
            user=response.data
            
            console.log(user)
        }).catch(error=>{
            console.log(error)
        })
    
    store.commit('getUser',user)
})

</script>
<template>
    <AuthLayoutVue>
        <div class="py-6 px-8 mt-6">
            <button @click="home" class="py-4 px-3 bg-gray-900 text-white rounded-md">go home</button>
            <h3 class="text-center font-bold text-[45px]">wlecome {{ store.state.user }}</h3>
            <button @click="getMe" class="py-4 px-3 bg-gray-900 text-white rounded-md">get me</button>
           
            
        </div>
    </AuthLayoutVue>
</template>