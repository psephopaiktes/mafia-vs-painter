<template><transition name="page"><div class="container">

  <h1 class="headline">{{ $store.state.en ? 'TOEN' : '投票' }}</h1>

  <p class="mt-24">{{ $store.state.en ? 'TOEN' : '全員が絵を書き終わりました。' }}</p>
  <p class="mt-24 fc-theme"><b>{{ $store.state.en ? 'TOEN' : '「せーの」で、それぞれがマフィアだと思う人を指さしてください。' }}</b></p>

  <p class="infoCell">{{ $store.state.en ? 'TOEN' : '絵描きはマフィアを見つけ出し、なおかつお題がバレていなければ勝利です。マフィアは見つからないか、お題を当てることができれば勝利です。' }}</p>

  <div class="bottomButtons fade">
    <button @click="goResult('painter')" class="button primary" type="button">{{ $store.state.en ? 'FINISH' : '絵描きの勝利' }}</button>
    <button @click="goResult('mafia')" class="button primary" type="button">{{ $store.state.en ? 'FINISH' : 'マフィアの勝利' }}</button>
  </div>

</div></transition></template>

<script>
export default {
  name: 'drawPaper',
  methods: {
    goResult(winner) {
      this.$store.commit('recordResult', winner)
      this.$router.push('/result');
    },
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
