import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import {questionService} from '@/services/quiz/question'

export const useQuestionStore = defineStore("question", ()=> {
    const state = reactive({
        questions: [],
        selectedQuestion: null,
        loading: false,
        error: null,
        connection: false
    })

    const isLoading = computed(()=>state.loading)
    const questionsCount = computed(()=>state.questions.length)

    const getQuestions = async()=>{
        state.loading = true
        try {
            state.questions = await questionService.getQuestions()
        }
        catch (error) {
            state.error = error
        }
        finally {
            state.loading = false
            state.connection = true
        }
    }

    const postQuestions = async(newQuestion)=>{
        state.loading = true
        try {
            state.questions.push(await questionService.postQuestions())
        }
        catch (error) {
            state.error = error
        }
        finally {
            state.loading = false
            state.connection = true
        }
    }

    const putQuestions = async(question)=>{
        state.loading = true
        try {
            const index = state.questions.findIndex((s)=>s.id === question.id)
            state.questions[index] = await questionService.putQuestions(question)
        }
        catch (error) {
            state.error = error
        }
        finally {
            state.loading = false
            state.connection = true
        }
    }

    const deleteQuestions = async(id)=>{
        state.loading = true
        try {
            const index = state.questions.findIndex((s)=> s.id === id)
            state.questions.splice(index, 1)
            await questionService.deleteQuestions(id)
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
        questionsCount,
        getQuestions,
        postQuestions,
        putQuestions,
        deleteQuestions
    }
})