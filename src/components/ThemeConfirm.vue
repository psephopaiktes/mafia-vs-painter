<template><div class="">

  <p v-if="$store.state.en">
    The theme category is <span class="textRed">{{ $store.state.category }}</span>.<br/>
    It's <span class="textRed">{{ $store.state.player[step] }}</span>'s turn.
  </p>
  <p v-else>
    お題のカテゴリは<span class="textRed">{{ $store.state.category }}</span><br/>
    順番は<span class="textRed">{{ $store.state.player[step] }}</span>
  </p>

  <p>{{ $store.state.en ? `Are you ${$store.state.player[step]} ?` : `あなたは${$store.state.player[step]}さんですか?` }}</p>

  <p class="infoCell">{{ $store.state.en ? 'Please check secret theme in turn one by one. The title is not displayed for one person in the role of mafia, but the theme is displayed in the painter of everyone else. Everyone knows the theme category (from which genre the theme will be chosen).' : '1人ずつ順番に、秘密のお題を確認します。マフィア役の1人にはお題が表示されませんが、その他全員の絵描き役にはお題が表示されます。お題のカテゴリ（どんなジャンルからお題が選ばれるか）は全員が知っています。' }}</p>


  <div class="bottomButtons fade">
    <router-link :to="'/theme/'+$store.state.player[step]" class="button primary">{{ $store.state.en ? 'YES' : 'はい' }}</router-link>
    <button @click="alert()" class="button secondary">{{ $store.state.en ? 'NO' : 'いいえ' }}</button>
  </div>


</div></template>

<script>
export default {
  name: 'themeConfirm',
  props: { step: Number, },
  methods: {
    alert() {
      const msg = (this.$store.state.en)?
        this.$store.state.player[this.step]+' please check the theme as others can not see it.' :
        this.$store.state.player[this.step]+'さんがひとりでお題を確認してください。';
      window.alert(msg);
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
  font-weight: 700;
  color: $COLOR_THEME;
  font-size: 1.5em;
}
</style>
