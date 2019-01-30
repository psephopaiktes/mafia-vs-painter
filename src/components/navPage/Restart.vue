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
a{
  margin: 32px auto 0;
  display: block;
  width: 100%;
  max-width: 240px;
  height: 56px;
  line-height: 56px;
  font-size: 20px;
  background: rgba(#fff,.8);
  border-radius: 2px;
  font-weight: bold;
  letter-spacing: .06em;
  text-decoration: none;
  text-align: center;
  color: $COLOR_MAIN;
  &:hover,&:active,&:visited{
    background: rgba(#fff,1);
    color: $COLOR_MAIN;
  }
}
</style>
