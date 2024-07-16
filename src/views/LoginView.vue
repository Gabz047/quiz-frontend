<script setup>
import {reactive, ref} from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/stores/auth/auth';
import API from '@/api/api';

const api = new API()

const store = useAuthStore()

const info = reactive({
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
                store.login({email: info.email, password: info.password, access: response.data.access, refresh: response.data.refresh})

                const username = localStorage.getItem('user')
                const password = localStorage.getItem('password')
                const email = localStorage.getItem("email")

                localStorage.setItem('user', information.username)
                localStorage.setItem('password', information.password)
                localStorage.setItem('email', information.email)
                
            }, 2000)
        }
    }).catch((error)=> {
        
            console.log('erro')
        
    })
}
</script>
<template>
<h1>login</h1>
<input type="text" v-model="info.email" placeholder="email">
<input type="text" v-model="info.password" placeholder="password">
<button @click="logar">login</button>
</template>