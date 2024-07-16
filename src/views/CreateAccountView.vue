<script setup>
import {ref, reactive, onMounted} from 'vue'
import API from '@/api/api';
import axios from 'axios';
import router from '@/router';
const api = new API()
const information = reactive({
    username: '',
    password: '',
    email: ''
})

onMounted(async ()=>{
    console.log(await api.Listar('api/usuarios/'))
})

const succed = ref(false)

async function createAccount() {
    const newuser = {
        username: information.username,
        email: information.email,
        password: information.password,
        is_staff: true,
        is_active: true,
        user_permissions: [
            5,
            6,
            7,
            8,
            21,
            22,
            23,
            24
        ]
    }
    await axios.post('api/usuarios/', newuser).then((response)=>{
        
            succed.value = true
            setTimeout(()=>{
                succed.value = false
                router.push('/')
            }, 4000)

     
    }).catch((error)=>{
        if(error.response.status === 401) {
            console.log("erro")
        }
    })
    
    
}
</script>
<template>
<h1>CREATE ACCOUNT</h1>
<input type="text" placeholder="username" v-model="information.username">
<input type="text" placeholder="email" v-model="information.email">
<input type="text" placeholder="password" v-model="information.password">
<button @click="createAccount">create</button>

<div class="succed" v-if="succed">
<p>Conta criada com sucesso!</p>
<div class="loading-bar"></div>
</div>
</template>