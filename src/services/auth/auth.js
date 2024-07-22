import axios from 'axios'

export default class AuthService {
    async postUserToken (token) {
        const response = await axios.get('http://localhost:8000/api/usuarios/me', {
        headers: {
            Authorizations: `Bearer ${token}`
        },
    })
    return response.data
    }
}