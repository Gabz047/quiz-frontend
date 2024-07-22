import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import answerService from "@/services/quiz/answer";

export const useAnswerStore = defineStore("answer", ()=> {
    const state = reactive({
        answers: [],
        selectedanswer: null,
        loading: false,
        error: null,
        connection: false
    })

    const isLoading = computed(()=>state.loading)
    const answersCount = computed(()=>state.answers.length)

    const getAnswers = async()=>{
        state.loading = true
        try {
            state.answers = await answerService.getAnswers()
        }
        catch (error) {
            state.error = error
        }
        finally {
            state.loading = false
            state.connection = true
        }
    }

    const postAnswers = async(newanswer)=>{
        state.loading = true
        try {
            state.answers.push(await answerService.postAnswers())
        }
        catch (error) {
            state.error = error
        }
        finally {
            state.loading = false
            state.connection = true
        }
    }

    const putAnswers = async(answer)=>{
        state.loading = true
        try {
            const index = state.answers.findIndex((s)=>s.id === answer.id)
            state.answers[index] = await answerService.putAnswers(answer)
        }
        catch (error) {
            state.error = error
        }
        finally {
            state.loading = false
            state.connection = true
        }
    }

    const deleteAnswers = async(id)=>{
        state.loading = true
        try {
            const index = state.answers.findIndex((s)=> s.id === id)
            state.answers.splice(index, 1)
            await answerService.deleteAnswers(id)
        }
        catch (error) {
            state.error = error
        }
        finally {
            state.loading = false
            state.connection = true
        }
    }

    return {
        state,
        isLoading,
        answersCount,
        getAnswers,
        postAnswers,
        putAnswers,
        deleteAnswers
    }
})