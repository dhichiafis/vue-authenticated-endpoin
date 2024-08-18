<script setup>
import {RouterLink,RouterView} from 'vue-router'
import axios from 'axios'
import {useStore} from 'vuex'
import { onBeforeMount } from 'vue'
const store=useStore()
onBeforeMount(()=>{
  const token=store.state.token 
  if(token){
    axios.defaults.headers.common['Authorization']='token'+token 
  }else{
    axios.defaults.headers.common['Authorization']=''
  }
})
</script>
<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>