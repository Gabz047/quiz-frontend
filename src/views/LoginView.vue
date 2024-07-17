<script setup>
import {reactive, ref} from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/stores/auth/auth';
import API from '@/api/api';

const api = new API()

const store = useAuthStore()

const info = reactive({
    username: null,
    email: '',
    password: '',
})

async function logar() {
    const user = {
        email: info.email,
        password: info.password
    }

    const token = await axios.post('token/', user).then((response) =>{
        if (response.status === 200) {
            console.log('logado')
            console.log(response.data.access)
            setTimeout(()=>{
                localStorage.setItem('user', info.username)
                localStorage.setItem('password', info.password)
                localStorage.setItem('email', info.email)
                info.username = localStorage.getItem('user')
                store.login({email: info.email, password: info.password, username: info.username, access: response.data.access, refresh: response.data.refresh})
            }, 2000)
        }
    }).catch((error)=> {
        
            console.log('erro')
        
    })
}
</script>
<template>
<h1>login</h1>
<input type="text" v-model="info.username" placeholder="username">
<input type="text" v-model="info.email" placeholder="email">
<input type="text" v-model="info.password" placeholder="password">
<button @click="logar">login</button>
</template>