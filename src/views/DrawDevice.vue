<template><transition name="page"><div class="container">

  <!-- <div id="canvasContainer">
    <p v-if="step==0">{{ $store.state.en ? 'Draw here !' : 'ここに絵を描いてください' }}</p>
    <canvas id="canvas" width="640px" height="480px">{{ $store.state.en ? 'TOEN' : '非対応の環境です' }}</canvas>
  </div> -->

  <p style="margin-top:48px;font-size: 2em;">未実装 😭</p>
  <p><router-link to="/draw/select">もどれ</router-link></p>

  <!-- <h1>{{ $store.state.player[step%$store.state.player.length] }}さんの番です</h1> -->

  <!-- <div v-show="confirm">
    <button>{{ $store.state.en ? 'NEXT PLAYER' : '次の人へ' }}</button>
    <button><i class="material-icons">undo</i> {{ $store.state.en ? 'RETRY' : '書き直す' }}</button>
  </div> -->

</div></transition></template>

<script>
export default {
  name: 'drawPaper',
  data() {
    return {
      step: 0,
      confirm: false,
      lineColors: [ '#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff' ],
    };
  },
  methods: {
  },
};
</script>


<style lang="scss" scoped>
#canvasContainer{
  width: 100vw;
  height:60vh;
  background: #fff;
  position: relative;
  p{
    position: absolute;
    width: 100%;
    top: 45%;
    color: #ccc;
    font-weight: 700;
    letter-spacing: .1em;
  }
}
</style>
