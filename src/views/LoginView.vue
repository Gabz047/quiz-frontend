<script setup>
import {reactive, ref} from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/stores/auth/auth';
import API from '@/api/api';

const api = new API()

const store = useAuthStore()

const info = reactive({
    username: '',
    email: '',
})

async function logar() {
    const user = {
        username: info.username,
        email: info.email
    }

    const token = await axios.post('token/', user).then((response) =>{
        if (response.status === 200) {
            console.log('logado')
            console.log(response.data.access)
            setTimeout(()=>{
                store.login({username: info.username, access: response.data.access, refresh: response.data.refresh})
            }, 2000)
        }
    }).catch((error)=> {
        if (error.response.status === 401) {
            console.log('erro')
        }
    })
}
</script>
<template>
<h1>login</h1>
<input type="text" v-model="info.username" placeholder="email">
<input type="text" v-model="info.password" placeholder="password">
<button @click="logar">login</button>
</template>