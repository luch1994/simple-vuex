<template>
  <div class="hello">
    <h3>直接使用$store</h3>
    <p>直接读取$store.state.count：{{$store.state.count}}</p>
    <p>直接读取$store.getters.mcount：{{$store.getters.mcount}}</p>
    <button type="button" @click="onAdd">数值加1</button>
    <button type="button" @click="onAsyncAdd">异步数值加1</button>
    <div class="line"></div>
    <h3>使用mapState、mapMutations和mapActions</h3>
    <p>使用mapState：{{mapCount}}</p>
    <p>使用mapGetters：{{mMapCount}}</p>
    <button type="button" @click="onAddMapCount">数值加1</button>
    <button type="button" @click="onAddMapCountSync">异步数值加1</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  name: 'HelloWorld',
  computed: {
    ...mapState(['mapCount']),
    ...mapGetters(['mMapCount'])
  },
  methods: {
    ...mapMutations(['addMapCount']),
    ...mapActions(['addMapCountSync']),
    onAdd() {
      this.$store.commit('Add');
    },
    async onAsyncAdd() {
      const res = await this.$store.dispatch('asyncAdd');
      if (res.ok) {
        alert('操作成功');
      }
    },
    onAddMapCount() {
      this.addMapCount();
    },
    async onAddMapCountSync() {
      const res = await this.addMapCountSync();
      if (res.ok) {
        alert('操作成功');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .line {
    border-top: 1px solid #333;
    margin: 10px 0;
  }
</style>
