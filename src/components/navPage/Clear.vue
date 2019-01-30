<template><div class="menuContent">
  <p>{{ $store.state.en ? 'TOEN' : '保存したプレイヤー情報、ゲームの記録などをすべて消去し、リセットします。' }}</p>
  <button @click="clear()" type="button">{{ $store.state.en ? 'Data Clear' : 'データを消去する' }}</button>
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
  margin: 32px auto 0;
  display: block;
  width: 100%;
  max-width: 240px;
  height: 56px;
  line-height: 56px;
  font-size: 20px;
  background: rgba(#fff,.8);
  border-radius: 2px;
  font-weight: bold;
  letter-spacing: .06em;
  &:hover,&:active{
    background: rgba(#fff,1);
  }
}
</style>
