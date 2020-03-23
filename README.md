## 一个简单的Vuex实现

### 熟悉vuex的一些使用方式，包括：
```js
// $store的方式
this.$store.state.xxx
this.$store.getters.xxx
this.$store.commit('MutationName', data)
this.$store.dispatch('ActionName', data)

// map的方式
computed: {
  ...mapState(['StateName']),
  ...mapGetters(['GetterName'])
}

methods: {
  ...mapMutations(['MutationName']),
  ...mapActions(['ActionName'])
}

```

### 实现一个简单的vuex
1. 写install方法，注册插件，引入Vue，并使用mixin在beforeCreate生命周期里给Vue的原型挂载对象
2. 定义Store类，将传入的state使用Vue实现响应式
3. 实现commit方法，即调用mutations的方法，使用响应式的state入参即可
4. 实现dispatch方法，即调用并返回actions的方法，使用响应式的state入参即可
5. 实现getters，利用Object.keys遍历传入的getters的key，再利用Object.defineProperty实现get方法

源码在<a href="https://github.com/luch1994/simple-vuex">github</a>上，在文件src/simple-vuex/index.js，演示的demo在文件/src/components/simple-vuex-demo.vue

## 开始使用
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
