<template><transition name="page"><div class="container">

  <h1 class="headline">{{ $store.state.en ? 'Result' : '結果' }}</h1>

  <div class="mt-24" v-if="$store.state.winner=='mafia'">
    <p>{{ $store.state.en ? 'TOEN' : 'マフィアが勝利しました。' }}</p>
  </div>

  <div class="mt-24" v-else-if="$store.state.winner=='painter'">
    <p>{{ $store.state.en ? 'TOEN' : '絵描きが勝利しました。' }}</p>
  </div>

  <div class="mt-24" v-else>
    <p>ERROR</p>
  </div>


  <div class="bottomButtons fade">
    <router-link to="/init" class="button primary">{{ $store.state.en ? 'REPLAY' : 'もう一度遊ぶ' }}</router-link>
    <router-link to="/" class="button secondary">{{ $store.state.en ? 'HOME' : 'トップへ' }}</router-link>
  </div>

</div></transition></template>

<script>
export default {
  name: 'drawPaper',
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
