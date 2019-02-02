<template><transition name="page"><div class="container">

  <h1 class="headline">{{ $store.state.en ? 'Drawing' : 'お絵かき中' }}</h1>

  <p class="mt-24">{{ $store.state.en ? 'Please prepare paper and pen and draw a stroke one by one in the below order. Please press "Finish" button after two rounds.' : '紙とペンを用意し、以下の順で一筆ずつ絵を描いてください。2巡したら「完了」ボタンを押してください。' }}</p>
  <ol>
    <li v-for="(item,i) in $store.state.player" :key="i">{{ item }}</li>
  </ol>

  <p class="infoCell">{{ $store.state.en ? 'Mafia draw a picture as if know the theme. Mafia must not be finded out from other people that you are a mafia. And guess what the theme is. Painter draw a picture as not to be finded out the theme to the mafia. And please guess what who is the mafia' : 'マフィアは正体がバレないように絵を描き、他の人の線からお題がなんなのか推測します。絵描きはマフィアにバレないように、お題を知っている人だけがわかるように絵を描きます。同時に、誰がマフィアなのか推測します。' }}</p>

  <div class="bottomButtons fade">
    <router-link to="/draw/complete" class="button primary">{{ $store.state.en ? 'FINISH' : '完了' }}</router-link>
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
      font-weight: 100;
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
