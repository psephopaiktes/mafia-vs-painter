<template><div class="">

  <p>
    <span>{{ $store.state.en ? 'TOEN' : `お題のカテゴリ： ` }}</span>
    <span><b>{{ $store.state.category }}</b></span><br/>

    <span>{{ $store.state.en ? 'TOEN' : `順番： ` }}</span>
    <span><b>{{ $store.state.player[step] }}</b></span>
  </p>

  <div v-if="$route.params.player == $store.state.mafia" class="characterCell">
    <imgMafia class="imgCharacter" />
    <p>あなたは<span class="textRed">マフィア</span>です。</p>
  </div><div v-else class="characterCell">
    <imgPainter class="imgCharacter" />
    <p>あなたは<span class="textRed">絵描き</span>です。<br/>
    お題は<span class="textRed">「{{$store.state.theme}}」</span>です。</p>
  </div>

  <p>{{ $store.state.en ? 'TOEN' : '確認できたら、「OK」ボタンを押してください。' }}</p>

  <div v-if="$route.params.player == $store.state.mafia">
    <p class="infoCell">{{ $store.state.en ? 'TOEN' : 'あなたは他の人に自分がマフィアだとバレてはいけません。さもお題を知っているかのように絵を描き、他の絵描きの描いた線から、お題を推測してください。' }}</p>
  </div><div v-else>
    <p class="infoCell">{{ $store.state.en ? 'TOEN' : 'マフィアにお題がばれないように、しかし絵描きの仲間には伝わるように絵を描いてください。誰がマフィアなのかも考えてみてください。' }}</p>
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
  font-weight: bold;
  color: $COLOR_THEME;
  font-size: 1.5em;
}
.characterCell{
  background: rgba(#fff,.6);
  padding: 24px 0;
  border-radius: 12px;
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
