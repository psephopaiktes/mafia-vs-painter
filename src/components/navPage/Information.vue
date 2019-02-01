<template><div class="menuContent">
  <h3>{{ $store.state.en ? 'TOEN' : '対応環境' }}</h3>
  <p>{{ $store.state.en ? 'TOEN' : 'iPhone、androidスマートフォン、Windows、Macなどのブラウザでの利用を想定しています。最新バージョンのOSとブラウザをご利用ください。' }}</p>
  <h3>{{ $store.state.en ? 'TOEN' : '免責事項' }}</h3>
  <p>{{ $store.state.en ? 'TOEN' : 'ご使用の際は' }}<a href="/terms.html" target="_brank">{{ $store.state.en ? 'TOEN' : '利用規約' }}</a>{{ $store.state.en ? 'TOEN' : 'をご確認ください。' }}</p>
  <h3>{{ $store.state.en ? 'Contact' : '連絡先' }}</h3>
  <p>{{ $store.state.en ? 'TOEN' : 'ご連絡はTwitterでお願いいたします。' }}</p>
  <p><a href="https://twitter.com/psephopaiktes" rel="nofollow" target="_blank">Twitter : @psephopaiktes</a></p>
</div></template>


<script>
export default {
  name: 'PageRecord',
}
</script>


<style lang="scss" scoped>
h3{
  margin-top: 24px;
}
p{
  margin-top: 8px;
  line-height: 1.5;
}
</style>
