import {computed, reactive, ref} from 'vue'
import {defineStore} from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {
    const islogged = ref(false)

    const userinfo = reactive({
        username: null,
        email: null,
        password: null,
        access: null,
        refresh: null
    })

    const showusername = ref('')

    const activated = ref(false)

    const links = computed((username)=>{
        if (!islogged.value) {
            return [{name: 'HOME', link: '/'}, {name: 'QUIZ', link: '/quiz'}, {name: 'LOGIN', link: '/auth'}]
        } else {
            return [{name: 'HOME', link: '/'}, {name: 'QUIZ', link: '/quiz'}, {name: showusername, link: '#'}]
        }
        
    }) 

    function login(info) {
        userinfo.email = info.email
        userinfo.password = info.password
        userinfo.username = info.username
        userinfo.access = info.access
        userinfo.refresh = info.refresh
        islogged.value = true
        window.location.reload()
    }

    async function autologin(info, userpayload) {
        await axios.post('/token/', info).then((response)=>{
            userinfo.username = userpayload.username
            userinfo.email = info.email
            userinfo.password = info.password
            userinfo.access = response.data.access
            userinfo.refresh = response.data.refresh
            islogged.value = true
            console.log(userinfo.username)
            console.log(response.data)
            showusername.value = userinfo.username

        }).catch((error)=>{
            console.log(error)
        })
    }

    async function logout() {
        localStorage.removeItem('user')
        localStorage.removeItem('password')
        localStorage.removeItem('email')
        userinfo.access = null
        userinfo.refresh = null
        islogged.value = false
    }
    

    return {userinfo, login, links, activated, autologin, showusername, logout, islogged, showusername};
})