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
        userinfo.username = info.username
        userinfo.access = info.access
        userinfo.refresh = info.refresh
        window.location.reload()
    }

    async function autologin(info, userpayload) {
        await axios.post('/token/', info).then((response)=>{
            userinfo.username = userpayload.username
            userinfo.email = info.email
            userinfo.password = info.password
            userinfo.access = response.data.access
            userinfo.refresh = response.data.refresh
            console.log(userinfo.username)
            console.log(response.data)

        }).catch((error)=>{
            console.log(info)
        })
    }

    async function logout() {
        localStorage.removeItem('user')
        localStorage.removeItem('password')
        localStorage.removeItem('email')
        userinfo.access = null
        userinfo.refresh = null
    }
    

    return {userinfo, login, links, activated, username, autologin, showusername, logout};
})