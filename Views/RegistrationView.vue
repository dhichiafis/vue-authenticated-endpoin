<script setup>
import { useRouter } from "vue-router";
import AuthLayoutVue from "../layout/AuthLayout.vue";
import axios from 'axios'
import { reactive } from "vue";


const router=useRouter()
const formData=reactive({
    username:'',
    password:'',
    role:''
})

const submit= async ()=>{
    const {username,password,role}=formData
    try{
        await axios.post('http://localhost:8008/users/register/',{username,password,role})
        router.push('/login')

    }catch(error){
        alert('invalid usernaem ro passwor')
    }
}
</script>
<template>
    <AuthLayoutVue>
        <div class="flex flex-col py-8">
            <h3 class="text-center font-bold mb-6">Register</h3>
            <form class="min-w-md mx-auto" @submit.prevent="submit">
                <div class="flex flex-col text-left">
                    <label for="username" class="mb-3">username</label>
                    <input type="text" v-model="formData.username" class="py-3 px-4 w-full rounded-md border-2 border-gray-400 ">
                </div>
                <div class="flex flex-col text-left">
                    <label for="password" class="mb-3">password</label>
                    <input type="password" v-model="formData.password" class="py-3 px-4 w-full rounded-md border-2 border-gray-400 ">
                </div>
                <div class="flex flex-col text-left">
                    <label for="role" class="mb-3">role</label>
                    <select v-model="formData.role" class="px-4 py-3 w-full rounded-md border-2 border-gray-400">
                        <option disabled value="">are you any of the above</option>
                        <option>admin</option>
                        <option>student</option>
                        <option>teacher</option>
                    </select>
                </div>
                <div class="flex flex-col mt-4">
                    <button class="w-full
                     py-3 px-4 block rounded-md bg-gray-900 text-center text-white">Register</button>
                    
                </div>
            </form>
        </div>
    </AuthLayoutVue>
</template>