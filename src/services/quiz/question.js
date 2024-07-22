import api from "@/plugins/api";

class questionService {
    async getQuestions() {
        try {
            const {data} = await api.get(`/quiz`)
            return data.results
        }
        catch (error) {
            console.log("error in getQuestions", error)
            throw error
        }
    }

    async postQuestions(newQuestion) {
        try {
            const {data} = await api.post(`/quiz`, newQuestion)
            return data.results
        }
        catch (error) {
            console.log("error in postQuestions", error)
            throw error
        }
    }

    async putQuestions(question) {
        try {
            const {data} = await api.put(`/quiz/${question.id}/`, question)
            return data.results
        }
        catch (error) {
            console.log("error in putQuestions", error)
            throw error
        }
    }

    async deleteQuestions(id) {
        try {
            const {data} = await api.delete(`/quiz/${id}/`)
            return data.results
        }
        catch (error) {
            console.log("error in deleteQuestions", error)
            throw error
        }
    }
}

export default new questionService()