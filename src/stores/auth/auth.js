import {reactive, ref} from 'vue'
import {defineStore} from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    const userinfo = reactive({
        username: null,
        access: null,
        refresh: null
    })

    const activated = ref(false)

    const links = [{name: 'HOME', link: '/'}, {name: 'QUIZ', link: '/quiz'}, {name: 'LOGIN', link: '/auth'}, {name: 'CREATE', link: '/createuser'}, {name: userinfo.username, link: '#'}]

    function login(info) {
        userinfo.username = info.username
        userinfo.access = info.access
        userinfo.refresh = info.refresh
    }
    

    return {userinfo, login, links, activated};
})