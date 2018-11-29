<template>
  <div class="">

    <div v-if="props.step==0">
      <p>{{ $store.state.en ? 'TOEN' : `今回のお題のカテゴリは「${$store.state.category}」です。` }}</p>
      <p>{{ $store.state.en ? 'TOEN' : `これから1人ずつ順番に、秘密のお題を確認します。${$store.state.player.length}人中の${$store.state.player.length-1}人の絵描きにはお題が表示され、1人のマフィアにはお題が表示されません。` }}</p>
    </div>

    <p>
      <span v-if="props.step==0">{{ $store.state.en ? 'TOEN' : 'まずは、' }}</span>
      <span v-else-if="props.step==$store.state.player.length-1">{{ $store.state.en ? 'TOEN' : '最後は、' }}</span>
      <span v-else>{{ $store.state.en ? 'TOEN' : '次に、' }}</span>
      {{ $store.state.en ? 'TOEN' : `${$store.state.player[props.step]}さんがお題を確認します。` }}
    </p>

    <p>{{ $store.state.en ? 'TOEN' : `あなたは${$store.state.player[props.step]}さんですか?` }}</p>

    <router-link :to="'/theme/'+$store.state.player[props.step]">{{ $store.state.en ? 'YES' : 'はい' }}</router-link>
    <button @click="alert()">いいえ</button>

  </div>
</template>

<script>
export default {
  name: 'themeConfirm',
  props: {
    props: Object,
  },
  methods: {
    alert() {
      window.alert(this.$store.state.player[this.props.step]+'さんがひとりでお題を確認してください。');
    },
  },
  mounted() {
  },
};
</script>


<style lang="scss" scoped>
</style>
