import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useAuthStore } from './stores/auth/auth'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

import App from './App.vue'
import router from './router'
import './plugins/api'
import axios from 'axios'

const app = createApp(App)
const pinia = createPinia()

app.use(axios)
app.use(router)
app.use(pinia)
app.use(mdiVue, {
    icons: mdijs
})
useAuthStore()
app.mount('#app')

