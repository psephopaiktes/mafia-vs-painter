<template><div class="menuContent">
  <p>{{ $store.state.en ? 'TOEN' : 'これまでプレイしたゲームの記録です。' }}</p>
  <table v-if="$store.state.record">{{ $store.state.record }}</table>
  <p v-else class="emptyState">ゲームの記録がありません。</p>
</div></template>


<script>
export default {
  name: 'PageRecord',
}
</script>


<style lang="scss" scoped>
.emptyState{
  padding: 24px;
  text-align: center;
  opacity: .5;
  font-weight: bold;
  font-size: 1.2em;
}
</style>
