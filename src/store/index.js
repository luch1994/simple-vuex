import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    mapCount: 0
  },
  getters: {
    // getters类似computed，返回计算属性
    mcount(state) {
      return 'm:' + state.count;
    },
    mMapCount(state) {
      return 'mMap:' + state.mapCount;
    }
  },
  mutations: {
    Add(state, num = 1) {
      state.count += num;
    },
    addMapCount(state, num = 1) {
      state.mapCount += num;
    }
  },
  actions: {
    asyncAdd({ commit }, num = 1) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('Add', num);
          resolve({ ok: true })
        }, 1000)
      })
    },
    addMapCountSync({ commit }, num = 1) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('addMapCount', num);
          resolve({ ok: true })
        }, 1000)
      })
    }
  },
  modules: {
  }
})
