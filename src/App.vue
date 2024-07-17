<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/headerComponents/Header.vue'
import { useAuthStore } from './stores/auth/auth';
import { onMounted } from 'vue';

const store = useAuthStore()


onMounted(() =>{
  const email = localStorage.getItem('email')
  const password = localStorage.getItem('password')
  const usernamedata = localStorage.getItem('user')
  store.autologin({email: email, password: password}, {username: usernamedata})
})

</script>

<template>
  <Header />

  <RouterView />
</template>