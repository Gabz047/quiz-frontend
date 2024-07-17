<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/headerComponents/Header.vue'
import { useAuthStore } from './stores/auth/auth';
import { onMounted } from 'vue';

const store = useAuthStore()


onMounted(() =>{
  const email = localStorage.getItem('email')
  const username = localStorage.getItem('user')
  const password = localStorage.getItem('password')
  store.autologin({email: email, password: password}, {username: username})
})

</script>

<template>
  <Header />

  <RouterView />
</template>