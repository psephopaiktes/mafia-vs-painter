<template><div class="menuContent">
  <p>{{ $store.state.en ? 'TOEN' : '保存したプレイヤー情報、ゲームの記録などをすべて消去し、リセットします。' }}</p>
  <button @click="clear()" type="button">{{ $store.state.en ? 'Data Clear' : 'データ消去' }}</button>
</div></template>


<script>
export default {
  name: 'PageRecord',
  methods: {
    clear(){
      localStorage.clear();
      const msg = (this.$store.state.en) ? 'data cleared' : 'データを消去しました。';
      window.alert(msg);
      window.location.href = '/';
    },
  },
}
</script>


<style lang="scss" scoped>
button{
  background: #fff;
}
</style>
