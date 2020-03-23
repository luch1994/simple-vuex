let Vue;

// install方法注册插件
function install(_Vue) {
  Vue = _Vue;

  Vue.mixin({
    beforeCreate() {
      if (this.$options.simplestore) {
        Vue.prototype.$simplestore = this.$options.simplestore;
      }
    }
  });
}

class Store {
  constructor(options) {
    this.state = new Vue({
      data: options.state
    });

    this.mutations = options.mutations;
    this.actions = options.actions;

    options.getters && this.initGetters(options.getters);
  }

  commit = (key, ...data) => {
    const fn = this.mutations[key];
    if (fn) {
      fn(this.state, ...data);
    }
  }

  dispatch = (key, ...data) => {
    const fn = this.actions[key];
    if (fn) {
      return fn({ commit: this.commit, state: this.state }, ...data);
    }
  }

  initGetters(getters) {
    this.getters = {};

    Object.keys(getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getters[key](this.state);
        }
      })
    })
  }
}

export default {
  install,
  Store
}
