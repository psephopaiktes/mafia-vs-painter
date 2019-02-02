<template><div class="">

  <div v-if="$route.params.player == $store.state.mafia" class="characterCell">
    <imgMafia class="imgCharacter" />
    <p v-if="$store.state.en">You are <span class="textRed">Mafia</span>.</p>
    <p v-else>あなたは<span class="textRed">マフィア</span>です。</p>
  </div><div v-else class="characterCell">
    <imgPainter class="imgCharacter" />
    <p v-if="$store.state.en">You are <span class="textRed">Painter</span>.</p>
    <p v-else>あなたは<span class="textRed">絵描き</span>です。</p>
    <p v-if="$store.state.en">The theme is <span class="textRed">{{$store.state.theme}}</span>.</p>
    <p v-else>お題は<span class="textRed">「{{$store.state.theme}}」</span>です。</p>
  </div>

  <p>
    <span>{{ $store.state.en ? 'The theme category: ' : `お題のカテゴリ： ` }}</span>
    <span><b>{{ $store.state.category }}</b></span><br/>

    <span>{{ $store.state.en ? 'Turn: ' : `順番： ` }}</span>
    <span><b>{{ $store.state.player[step-1] }}</b></span>
  </p>

  <p>{{ $store.state.en ? 'After confirming, please press "OK" button.' : '確認できたら、「OK」ボタンを押してください。' }}</p>

  <div v-if="$route.params.player == $store.state.mafia">
    <p class="infoCell">{{ $store.state.en ? 'You must not be finded out other people that you are a mafia. Please draw a picture as if you know the theme. And guess the theme from the lines drawn by other players.' : 'あなたは他の人に自分がマフィアだとバレてはいけません。さもお題を知っているかのように絵を描き、他の絵描きの描いた線から、お題を推測してください。' }}</p>
  </div><div v-else>
    <p class="infoCell">{{ $store.state.en ? 'Please draw a picture as not to be finded out the theme to the mafia, but as to convey to fellows. And please guess what who is the mafia.' : 'マフィアにお題がばれないように、しかし絵描きの仲間には伝わるように絵を描いてください。誰がマフィアなのかも考えてみてください。' }}</p>
  </div>

  <div class="bottomButtons fade">
    <div v-if="step>=$store.state.player.length">
      <router-link to="/draw/select" class="button primary">OK</router-link>
    </div><div v-else>
      <router-link to="/theme/" class="button primary">OK</router-link>
    </div>
  </div>

</div></template>

<script>
import imgMafia from '@/components/img/mafia.vue';
import imgPainter from '@/components/img/painter.vue';

export default {
  name: 'themePlayer',
  props: { step: Number, },
  methods: {
  },
  mounted() {
    this.$emit('stepUp');
  },
  components: {
    imgMafia,
    imgPainter,
  },
};
</script>


<style lang="scss" scoped>
p{
  margin-top: 24px;
}
.textRed{
  font-weight: 700;
  color: $COLOR_THEME;
  font-size: 1.5em;
}
.characterCell{
  background: rgba(#fff,.6);
  padding: 24px 0;
  border-radius: 16px;
  margin-top: 24px;
  text-align: center;
  border: 4px solid $COLOR_THEME;
}
.imgCharacter{
  width: 160px;
  height: auto;
  display: block;
  margin: 0 auto;
}
</style>
