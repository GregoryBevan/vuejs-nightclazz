import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favorites: []
  },
  mutations: {
    addFavorite(state, serie) {
      state.favorites = [...state.favorites, serie]
    },
    removeFavorite(state, serie) {
      state.favorites = state.favorites.filter(item => item.id !== serie.id)
    }
  }
})
