<template><transition name="page"><div class="container">

  <h1 class="headline">{{ $store.state.en ? 'TOEN' : '結果' }}</h1>

  <p class="mt-24">{{ $store.state.en ? 'TOEN' : 'マフィアが勝利しました。' }}</p>

  <div class="bottomButtons fade">
    <router-link to="/init" class="button primary">{{ $store.state.en ? 'REPLAY' : 'もう一度遊ぶ' }}</router-link>
    <router-link to="/" class="button secondary">{{ $store.state.en ? 'HOME' : 'トップへ' }}</router-link>
  </div>

</div></transition></template>

<script>
export default {
  name: 'drawPaper',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>


<style lang="scss" scoped>
ol{
  margin-top: 24px;
  font-size: 1.2em;
  color: $COLOR_THEME;
  line-height: 1.5;
  font-weight: bold;
  counter-reset: number;
  list-style-type: none;
  li{
    margin-top: 12px;
    padding-left: 1.5em;
    position: relative;
    &::before{
      position: absolute;
      counter-increment: number;
      content: counter(number);
      display:inline-block;
      background: $COLOR_THEME;
      opacity: .4;
      color: #FFF;
      font-size: 16px;
      font-weight: lighter;
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      left: 0;
      top: 4px;
    }
  }
}
</style>
