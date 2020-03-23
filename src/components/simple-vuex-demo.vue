<template>
  <div class="hello">
    <h3>直接使用$simplestore</h3>
    <p>直接读取$simplestore.state.count：{{$simplestore.state.count}}</p>
    <p>直接读取$simplestore.getters.mcount：{{$simplestore.getters.mcount}}</p>
    <button type="button" @click="onAdd">数值加1</button>
    <button type="button" @click="onAsyncAdd">异步数值加1</button>
  </div>
</template>

<script>
export default {
  methods: {

    onAdd() {
      this.$simplestore.commit('Add');
    },
    async onAsyncAdd() {
      const res = await this.$simplestore.dispatch('asyncAdd');
      if (res.ok) {
        alert('操作成功');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
