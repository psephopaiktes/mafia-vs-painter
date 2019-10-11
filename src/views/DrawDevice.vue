<template><transition name="page">

  <header>
    <h2>{{ $store.state.player[step%$store.state.player.length] }}{{ $store.state.en ? '' : 'さん' }}</h2>
    <ul>
      <li><button>?</button></li>
      <li><button><iconUndo /></button></li>
    </ul>
  </header>

  <div id="canvasContainer">
    <!-- <p v-if="step==0">{{ $store.state.en ? 'Draw here !' : 'ここに絵を描いてください' }}</p> -->
    <canvas id="canvas" width="640px" height="480px">{{ $store.state.en ? 'NOT SUPPORTED BROWSER.' : '非対応の環境です' }}</canvas>
  </div>

</transition></template>

<script>
import iconUndo from '@/components/icon/undo.vue';

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
  components: {
    iconUndo,
  },
};

// Canvasの処理
</script>


<style lang="scss" scoped>
header{
  width: 100%;
  height: 40px;
  line-height: 40px;
  /* background: #fcc; */
  h2{
    display: inline-block;
    margin-left: 16px;
  }
  ul{
    float: right;
    display: flex;
  }
  button{
    display: block;
    width: 40px;
    height: 40px;
    text-align: center;
  }
  li:nth-child(1) button{
    background: rgba($COLOR_MAIN,.3);
    color: rgba(#fff,.6);
    font-size: 18px;
  }
  li:nth-child(2) button{
    background: $COLOR_ACCENT;
    fill: #fff;
    svg{
      width: 24px;
      margin: 8px;
    }
  }
}
/* #canvasContainer{
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
} */
</style>
