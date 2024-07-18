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
    <main class="main-signin">
        <section class="section-signin">
            <div class="container-signin">
                <h1>Sign in</h1>

                <div class="box-inputs-signin">
                    <div class="loginboxes-signin">
                        <div class="box-inputs-child-signin">
                            <mdicon class="vicon" name="account" :height="50" :width="50" fill="black" />
                        </div>
                        <input type="text" placeholder="Username" v-model="information.username">
                    </div>
                    <div class="loginboxes-signin">
                        <div class="box-inputs-child-signin">
                            <mdicon class="vicon" name="at" :height="40" :width="40" />
                        </div>
                        <input type="text" placeholder="Email" v-model="information.email">
                    </div>
                    <div class="loginboxes-signin">
                        <div class="box-inputs-child-signin">
                            <mdicon class="vicon" name="lock" :height="40" :width="40" />
                        </div>
                        <input type="text" placeholder="Password" v-model="information.password">
                    </div>
                    <div class="loginboxes-signin">
                        <div class="box-inputs-child-signin">
                            <mdicon class="vicon" name="lock-check" :height="40" :width="40" />
                        </div>
                        <input type="text" placeholder="Confirm password">
                    </div>
                </div>
                
                <div class="box-btn-signin">
                    <button @click="createAccount">Sign in</button>
                </div>
                <div class="box-company-mark">
                    <img src="../assets/images/baboonblack.png">
                    <p>Banboo inc.</p>
                </div>
            </div>
        </section>
    </main>

<div class="succed" v-if="succed">
<p>Conta criada com sucesso!</p>
<div class="loading-bar"></div>
</div>
</template>