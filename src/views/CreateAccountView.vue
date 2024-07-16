<script setup>
import {ref, reactive, onMounted} from 'vue'
import API from '@/api/api';
const api = new API()
const information = reactive({
    username: '',
    password: '',
    email: ''
})

onMounted(async ()=>{
    console.log(await api.Listar('api/usuarios/'))
})

async function createAccount() {
    const newuser = {
        username: information.username,
        email: information.email,
        password: information.password,
        is_staff: true,
        is_active: true,
        user_permissions: [1,2,3,4]
    }
    await api.Criar('api/usuarios/', newuser)
}
</script>
<template>
<h1>CREATE ACCOUNT</h1>
<input type="text" placeholder="username" v-model="information.username">
<input type="text" placeholder="email" v-model="information.email">
<input type="text" placeholder="password" v-model="information.password">
<button @click="createAccount">create</button>
</template>