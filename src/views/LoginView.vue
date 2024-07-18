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
    <main class="main-login">
        <section class="section-login">
            <div class="container-login">
                <h1>Login</h1>

                <div class="box-inputs">
                    <div class="loginboxes">
                        <div class="box-inputs-child">
                            <mdicon name="account" :height="60" :width="60" />
                        </div>
                        <input type="text" placeholder="Username" v-model="info.username">
                    </div>
                    <div class="loginboxes">
                        <div class="box-inputs-child">
                            <mdicon name="at" :height="50" :width="50" />
                        </div>
                        <input type="text" placeholder="Email" v-model="info.email">
                    </div>
                    <div class="loginboxes">
                        <div class="box-inputs-child">
                            <mdicon name="lock" :height="50" :width="50" />
                        </div>
                        <input type="text" placeholder="Password" v-model="info.password"
                    </div>
                </div>
                <div class="box-aditional-info">
                    <p>forgot password?</p>
                    <p>or</p>
                    <RouterLink to="/createuser">Create account</RouterLink>
                </div>
                <div class="box-btn-login">
                    <button @click="logar">Login</button>
                </div>
                <div class="box-company-mark">
                    <img src="../assets/images/baboonblack.png">
                    <p>Banboo inc.</p>
                </div>
            </div>
        </section>
    </main>
 </template>