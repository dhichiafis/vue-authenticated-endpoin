<script setup>
import { useRouter } from "vue-router";
import AuthLayoutVue from "../layout/AuthLayout.vue";
import axios from 'axios'
import { reactive } from "vue";
import { useStore } from "vuex";


const router=useRouter();
const formData=reactive({
    username:'',
    password:'',
    role:''  
})
const store=useStore()
const submit= ()=>{
    
    axios.post('http://localhost:8008/users/token/'
    ,{username:formData.username,password:formData.password},
        {
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        }
    }).then(response=>{
        const token=response.data.access_token
        store.commit('setToken',token)
        axios.defaults.headers.common['Authorization']='token'+token 
        localStorage.setItem('token',token)
        router.push('/dashboard')
        
    }).catch(error=>{
        alert('error');
    })
}

</script>
<template>
    <AuthLayoutVue>
        <div class="flex flex-col">
            <h3 class="text-center font-bold mb-6">Login</h3>
            <form class="min-w-md mx-auto" @submit.prevent="submit">
                <div class="flex flex-col text-left">
                    <label for="username" class="mb-3">username</label>
                    <input type="text" v-model="formData.username"
                      class="py-3 px-4 w-full rounded-md border-2 border-gray-400 ">
                </div>
                <div class="flex flex-col text-left">
                    <label for="password" class="mb-3">password</label>
                    <input type="password" v-model="formData.password"
                     class="py-3 px-4 w-full rounded-md border-2 border-gray-400 ">
                </div>
                
                <div class="flex flex-col mt-4">
                    <button class="w-full py-3 px-4 block rounded-md bg-gray-900 text-center text-white">Login</button>
                    <p class="mt-2 " @click="router.push('/register')"> register </p>
                </div>
            </form>
        </div>
    </AuthLayoutVue>
</template>