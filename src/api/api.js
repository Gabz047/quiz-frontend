import axios from "axios";

export default class API{
    async Listar(link){
        const { data } = await axios.get(link)
        return data
    }
    async Criar(link, valor){
        const { data } = await axios.post(link, valor)
        return data.results
    }
    async Atualizar(link, valor) {
        const { data } = await axios.patch(link, valor)
        return data.results
    }
    async Remover(link) {
        const { data } = await axios.delete(link)
        return data.results
    }
}