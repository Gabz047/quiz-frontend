import {computed, reactive, ref} from 'vue'
import {defineStore} from 'pinia'
import AuthService from '@/services/auth/auth'


const authService = new AuthService()

export const useAuthStore = defineStore('auth', () => {
    const islogged = ref(false)
    const activated = ref(false)
    const user = ref({})
    const showusername = computed(()=>{
        return user.value.username
    })

    const links = computed(()=>{
        if (!islogged.value) {
            return [{name: 'HOME', link: '/'}, {name: 'QUIZ', link: '/quiz'}, {name: 'LOGIN', link: '/auth'}]
        } else {
            return [{name: showusername, link: '#'}, {name: 'HOME', link: '/'}, {name: 'QUIZ', link: '/quiz'}]
        }
        
    }) 

    async function setToken(token) {
        user.value = await authService.postUserToken(token)
        islogged.value = true
    }

    async function unsetToken() {
        user.value = {}
    }

    
   // function login(info) {
     //   userinfo.email = info.email
    //    userinfo.password = info.password
     //   userinfo.username = info.username
     //   userinfo.access = info.access
     //   userinfo.refresh = info.refresh
     //   islogged.value = true
     //   window.location.reload()
  //  }

   // async function autologin(info, userpayload) {
     //   await axios.post('/token/', info).then((response)=>{
   //         userinfo.username = userpayload.username
       //     userinfo.email = info.email
      //      userinfo.password = info.password
        //    userinfo.access = response.data.access
        //    userinfo.refresh = response.data.refresh
        //    islogged.value = true
        //    console.log(userinfo.username)
        //    console.log(response.data)
       //     showusername.value = userinfo.username

      //  }).catch((error)=>{
       //     console.log(error)
    //    })
  //  }//

   // async function logout() {
    //    localStorage.removeItem('user')
    //    localStorage.removeItem('password')
   //     localStorage.removeItem('email')
    //    userinfo.access = null
   //     userinfo.refresh = null
    //    islogged.value = false
   // }
    

    return {user, setToken, unsetToken, activated, showusername, links, islogged};
})