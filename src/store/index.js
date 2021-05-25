import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const baseUrl = 'https://masak-apa.tomorisakura.vercel.app';
const corsUrl = 'https://api.allorigins.win/raw?url='

Vue.use(Vuex)
export default new Vuex.Store({
  state: {

    recipes: [],
    newRecipes: [],
    detailRecipe: [],
    category: [],
    recipesByCategory: [],
    favorites: [],
    searchRecipes: []

  },

  mutations: {

    setRecipes(state,payload){
      state.recipes = payload
    },

    setNewRecipes(state, payload){
      state.newRecipes = payload
    },

    setDetails(state, payload){
      state.detailRecipe = payload
    },

    setCategory(state, payload){
      state.category = payload
    },

    setRecipesByCategory(state, payload){
      state.recipesByCategory = payload
    },

    setFavorites(state, payload){
      state.favorites.push(payload) 
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },

    deletedFromFavorites(state, payload){
      state.favorites = payload
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },

    setSearchRecipes(state, payload){
      state.searchRecipes = payload
    }

  },
  actions: {
    
    async getRecipes({commit}) {
      const response = await axios.get(`${corsUrl}${baseUrl}/api/recipes-length/?limit=9`)
      commit('setRecipes', response.data.results)
    },

    async getNewRecipes({commit}) {
      const response = await axios.get(`${corsUrl}${baseUrl}/api/recipes/new`)
      commit('setNewRecipes', response.data.results)
    },

    async getDetails({commit}, payload){
      const response = await axios.get(`${corsUrl}${baseUrl}/api/recipe/${payload}`)
      commit('setDetails', response.data.results)
    },

    async getCategory({commit}){
      const response = await axios.get(`${corsUrl}${baseUrl}/api/categorys/recipes`)
      commit('setCategory', response.data.results)
    },

    async getRecipesByCategory({commit}, payload){
      const response = await axios.get(`${corsUrl}${baseUrl}/api/categorys/recipes/${payload}`)
      commit('setRecipesByCategory', response.data.results)
    },

    async getFavorites({commit}, payload){
      commit('setFavorites', payload)
    },

    deleteFromFavorites({commit}, payload){
      let myArray = this.state.favorites.filter(function( obj ) {
        return obj.key !== payload;
      });
      commit('deletedFromFavorites', myArray)
    },

    async getSearchRecipes({commit}, payload){
      const response = await axios.get (`${corsUrl}${baseUrl}/api/search/?q=${payload}`)
      commit('setSearchRecipes', response.data.results)
    },

  },
  modules: {
  }
})
