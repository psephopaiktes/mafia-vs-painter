<template><transition name="page"><div class="container">

  <h1 class="headline">{{ $store.state.en ? 'VOTE' : '投票' }}</h1>

  <p class="mt-24">{{ $store.state.en ? 'Now, The picture has been completed.' : '全員が絵を書き終わりました。' }}</p>
  <p class="mt-24 fc-theme"><b>{{ $store.state.en ? 'Ready, set, go!  Please point to someone who thinks who is a mafia each a same time.' : '「せーの」で、それぞれがマフィアだと思う人を指さしてください。' }}</b></p>

  <p class="infoCell">{{ $store.state.en ? 'Painters will win if  they find out the mafia and not be fineded out the theme. Mafia will win if he isn\'t finded out or if he can hit the theme. ' : '絵描きはマフィアを見つけ出し、なおかつお題がバレていなければ勝利です。マフィアは見つからないか、お題を当てることができれば勝利です。' }}</p>

  <div class="bottomButtons fade">
    <button @click="goResult('painter')" class="button primary" type="button">{{ $store.state.en ? 'Painters win.' : '絵描きの勝利' }}</button>
    <button @click="goResult('mafia')" class="button primary" type="button">{{ $store.state.en ? 'Mafia win.' : 'マフィアの勝利' }}</button>
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
</style>
