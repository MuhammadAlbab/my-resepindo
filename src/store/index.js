import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const baseUrl = 'https://masak-apa.tomorisakura.vercel.app';
const corsUrl = 'https://api.allorigins.win/raw?url='

Vue.use(Vuex)
export default new Vuex.Store({
  state: {

    recipes: [],
    detailRecipe: []

  },
  mutations: {

    setRecipes(state,payload){
      state.recipes = payload
    },

    setDetails(state, payload){
      state.detailRecipe = payload
    }

  },
  actions: {
    
    async getRecipes({commit}) {

      const response = await axios.get(`${corsUrl}${baseUrl}/api/recipes`)
      commit('setRecipes', response.data.results)

    },

    async getDetails({commit}, payload){

      const response = await axios.get (`${corsUrl}${baseUrl}/api/recipe/${payload}`)
      commit('setDetails', response.data.results)
    }

  },
  modules: {
  }
})
