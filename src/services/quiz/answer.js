import api from "@/plugins/api";

class answerService {

    async getAnswers() {
        try {
            const {data} = await api.get(`/answer`)
            return data.results
        }
        catch (error) {
            console.log("error in getAnswers", error)
            throw error
        }
    }

    async postAnswers(newAnswer) {
        try {
            const {data} = await api.post(`/answer`, newAnswer)
            return data.results
        }
        catch (error) {
            console.log("error in postAnswers", error)
            throw error
        }
    }

    async putAnswers(answer) {
        try {
            const {data} = await api.put(`/answer/${answer.id}/`, answer)
            return data.results
        }
        catch (error) {
            console.log("error in putAnswers", error)
            throw error
        }
    }

    async deleteAnswers(id) {
        try {
            const {data} = await api.delete(`/answer/${id}/`)
            return data.results
        }
        catch (error) {
            console.log("error in deleteAnswers", error)
            throw error
        }
    }
}

export default new answerService()