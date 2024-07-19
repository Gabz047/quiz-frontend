<script setup>
import API from '@/api/api';
import { onMounted, ref } from 'vue';
import { useAuthStore } from '@/stores/auth/auth';
import '@passageidentity/passage-elements/passage-auth'

const api = new API
const users = ref([])
const store = useAuthStore()

onMounted(async () =>{
  if(store.islogged == true) {
    users.value = await api.Listar('api/usuarios/')
    console.log(users.value)
  }
})
</script>

<template>
  <main>
    <p v-for="user in users"> {{ user.username }} </p>
  </main>
  <div class="authContainer">
  <passage-auth :app-id="appId"></passage-auth>
</div>
</template>
