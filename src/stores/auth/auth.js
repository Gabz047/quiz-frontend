import {computed, reactive, ref} from 'vue'
import {defineStore} from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {
    const username = ref('')

    const showusername = computed(()=>{
        return username.value
    })
    const userinfo = reactive({
        username: null,
        email: null,
        password: null,
        access: null,
        refresh: null
    })

    const activated = ref(false)

    const links = computed((username)=>{
        return [{name: 'HOME', link: '/'}, {name: 'QUIZ', link: '/quiz'}, {name: 'LOGIN', link: '/auth'}, {name: 'CREATE', link: '/createuser'}, {name: username, link: '#'}]
    }) 

    function login(info) {
        userinfo.email = info.email
        userinfo.password = info.password
        userinfo.access = info.access
        userinfo.refresh = info.refresh
        window.location.reload()
    }

    async function autologin(info) {
        await axios.post('/token/', info).then((response)=>{
            localStorage.setItem("access", response.data.access)
            localStorage.setItem("refresh", response.data.refresh)

            userinfo.username = info.email
            userinfo.access = response.data.access
            userinfo.refresh = response.data.refresh
            console.log(username.value)
        }).catch((error)=>{
            console.log(info)
        })
    }
    

    return {userinfo, login, links, activated, username, autologin, showusername};
})