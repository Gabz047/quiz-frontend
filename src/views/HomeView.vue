<script setup>
import { onMounted } from 'vue';
import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import { useAuthStore } from '../stores/auth/auth';
const authStore = useAuthStore()

const getUserInfo = async()=> {
  try {
    const authToken = localStorage.getItem('psg_auth_token')
    const passageUser = new passageUser(authToken)
    const user = await passageUser.userInfo(authToken)

    if (user) {
      await authStore.setToken(authToken)
    } else {
      authStore.unsetToken()
    }
  }
  catch (error) {
    authStore.unsetToken()
  }
}

onMounted(()=>{
  getUserInfo()
})
</script>

<template>
  <main>
    <p v-for="user in users"> {{ user.username }} </p>
    <p>OLÁ</p>
  </main>
</template>
