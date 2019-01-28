<template><div class="menuContent">
  <p>{{ $store.state.en ? 'TOEN' : 'ゲームを中断して最初の画面に戻ります。' }}</p>
  <a href="/">{{ $store.state.en ? 'Restart' : 'やりなおす' }}</a>
</div></template>


<script>
export default {
  name: 'PageRecord',
}
</script>


<style lang="scss" scoped>
</style>
