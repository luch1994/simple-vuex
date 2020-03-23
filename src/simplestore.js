import Vue from 'vue';
import SimpleVuex from './simple-vuex';

Vue.use(SimpleVuex);

export default new SimpleVuex.Store({
  state: {
    count: 0
  },
  getters: {
    // getters类似computed，返回计算属性
    mcount(state) {
      return 'm:' + state.count;
    }
  },
  mutations: {
    Add(state, num = 1) {
      state.count += num;
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
    }
  }
})

