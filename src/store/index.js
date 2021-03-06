import { createStore } from 'vuex'
import { faqCategories } from '../utils/db.json'

export default createStore({
  state: {
    faqData: [],
    currentSubject: 0,
    currentQuestion: 0
  },
  mutations: {
    SET_FAQ_DATA(state, data) {
      state.faqData = data
    },
    SET_QUESTION(state, question) {
      state.currentQuestion = question
    },
    SET_SUBJECT(state, subject) {
      state.currentSubject = subject
    }
  },
  actions: {
    fetchData(context) {
      const data = faqCategories

      context.commit('SET_FAQ_DATA', data)
    }
  },
  getters: {
    $allData(state) {
      return state.faqData
    },
    $filteredDataSubject: (state) => {
      return state.faqData[state.currentSubject - 1]
    },
    $filteredDataQuestion: (state) => {
      const [questionData] = state.faqData[
        state.currentSubject - 1
      ].questions.filter((item) => item.id === state.currentQuestion)

      return questionData
    }
  }
})
