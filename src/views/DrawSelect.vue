<template><transition name="page"><div class="drawSelect container">

  <h1 class="headline">{{ $store.state.en ? 'Selection' : 'キャンバスの選択' }}</h1>
  <p class="mt-24">{{ $store.state.en ? 'TOEN' : '全員がお題を確認できました。' }}</p>
  <p class="mt-8">{{ $store.state.en ? 'TOEN' : '順番に絵を描いていきます。どちらの方法で絵を描きますか ?' }}</p>

  <input type="radio" name="media" value="device" id="device" v-model="media" checked="checked">
  <label for="device">
    <imgDrawDevice class="imgDraw" />
    {{ $store.state.en ? 'TOEN' : 'この画面に直接描く' }}
  </label>

  <input type="radio" name="media" value="paper" id="paper" v-model="media">
  <label for="paper">
    <imgDrawPaper class="imgDraw" />
    {{ $store.state.en ? 'TOEN' : '紙とペンで描く' }}
  </label>

  <p class="infoCell">{{ $store.state.en ? 'TOEN' : 'この画面上で絵を描くか、鉛筆などを使って紙に描くか選んでください。画面上に描く場合は、大型のスマートフォンやタブレットPCでの利用をおすすめします。' }}</p>

  <div class="bottomButtons fade">
    <router-link :to="'/draw/'+media" class="button primary">{{ $store.state.en ? 'START' : '開始' }}</router-link>
  </div>

</div></transition></template>

<script>
import imgDrawDevice from '@/components/img/draw_device.vue';
import imgDrawPaper from '@/components/img/draw_paper.vue';

export default {
  name: 'drawSelect',
  data() {
    return {
      media: 'device',
    };
  },
  methods: {
  },
  components: {
    imgDrawDevice,
    imgDrawPaper,
  },
};
</script>


<style lang="scss" scoped>
input[type=radio]{
  display: none;
}
label{
  width: 100%;
  display: block;
  background: #fff;
  margin-top: 16px;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  opacity: .5;
  cursor: pointer;
  .imgDraw{
    width: 96px;
    height: 96px;
    display: block;
    margin: 0 auto 4px;
    filter: grayscale(100%);
    transform: scale(.9);
    transition: all .1s ease;
  }
  input:checked  + &{
    opacity: 1;
    color: $COLOR_THEME;
    position: relative;
    .imgDraw{
      filter: grayscale(0);
      transform: scale(1);
    }
    &::before{
      content: "";
      position: absolute;
      displey: block;
      top: 16px;
      left: 16px;
      transform: rotate(-45deg);
      width: 24px;
      height: 12px;
      border: 4px solid $COLOR_THEME;
      border-width: 0 0 6px 6px;
    }
  }
}
</style>
