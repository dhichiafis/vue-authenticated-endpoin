<script setup>
import {RouterLink} from 'vue-router'
</script>
<template>
    <div class="">
        <header class=" flex flex-row justify-between px-8 shadow-md">
            <RouterLink to="/" class="text-gray-900 text-[23px] py-4 px-4 ">home</RouterLink>
            <RouterLink to="/dashboard" class="text-gray-900 text-[23px] py-4 px-4 ">dashboard</RouterLink>
        
            <RouterLink to="/login" class="text-gray-900 text-[23px] py-4 px-4 ">login</RouterLink>
        </header>
        <main class="mt-9 py-12 lg:px-12 sm:px-6">
            <slot></slot>
        </main>
        <footer class="py-12 mt-5">
            <div class="text-center mx-auto ">
                @2024 ochieng odhiambo
            </div>
        </footer>
    </div>
</template>