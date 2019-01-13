<template><div class="">

  <p>
    <span>{{ $store.state.en ? 'TOEN' : `お題のカテゴリ： ` }}</span>
    <span class="textRed">{{ $store.state.category }}</span><br/>

    <span>{{ $store.state.en ? 'TOEN' : `順番： ` }}</span>
    <span class="textRed">{{ $store.state.player[step] }}</span>
  </p>

  <p>{{ $store.state.en ? 'TOEN' : `あなたは${$store.state.player[step]}さんですか?` }}</p>

  <p class="infoCell">{{ $store.state.en ? 'TOEN' : '1人ずつ順番に、秘密のお題を確認します。マフィア役の1人にはお題が表示されませんが、その他全員の絵描き役にはお題が表示されます。お題のカテゴリ（どんなジャンルからお題が選ばれるか）は全員が知っています。' }}</p>


  <div class="bottomButtons fade">
    <router-link :to="'/theme/'+$store.state.player[step]" class="button primary">{{ $store.state.en ? 'YES' : 'はい' }}</router-link>
    <button @click="alert()" class="button secondary">いいえ</button>
  </div>


</div></template>

<script>
export default {
  name: 'themeConfirm',
  props: { step: Number, },
  methods: {
    alert() {
      window.alert(this.$store.state.player[this.step]+'さんがひとりでお題を確認してください。');
    },
  },
  mounted() {
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
</style>
