<template><div class="menuContent">
  <h3>{{ $store.state.en ? 'Supported environment' : '対応環境' }}</h3>
  <p>{{ $store.state.en ? 'iPhone, Android, Windows, MacOS. Please use the latest version OS and browser.' : 'iPhone、androidスマートフォン、Windows、Macなどのブラウザでの利用を想定しています。最新バージョンのOSとブラウザをご利用ください。' }}</p>
  <h3>{{ $store.state.en ? 'Disclaimer' : '免責事項' }}</h3>
  <p v-if="$store.state.en">Please confirm the <a href="/terms.html" target="_brank">terms of use (Japanese)</a> when using.</p>
  <p v-else>ご使用の際は<a href="/terms.html" target="_brank">利用規約</a>をご確認ください。</p>
  <h3>{{ $store.state.en ? 'Contact' : '連絡先' }}</h3>
  <p v-if="!$store.state.en">ご連絡はTwitterでお願いいたします。</p>
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
