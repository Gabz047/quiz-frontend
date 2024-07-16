import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useAuthStore } from './stores/auth/auth'

import App from './App.vue'
import router from './router'
import './plugins/axios'
import axios from 'axios'

const app = createApp(App)
const pinia = createPinia()

app.use(axios)
app.use(router)
app.use(pinia)
useAuthStore()

app.mount('#app')
