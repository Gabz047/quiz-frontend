import axios from 'axios'

export default class AuthService {
    async postToken (param) {
        const response = await axios.get('http://localhost:8000/api/usuarios/me', {
            headers: {
                Auth: `Barer ${param}`
            }
        })

        return response.data
    }
}