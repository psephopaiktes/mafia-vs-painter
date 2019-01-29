<template><div class="menuContent">
  <p>{{ $store.state.en ? 'TOEN' : 'このゲームをSNSで共有できます。' }}</p>

  <ul v-if="$store.state.en">
    <li><a href="https://twitter.com/share?url=https://mafi.app&text=Mafia%20Vs%20Painter%20%23game" rel="nofollow" target="_blank">Twitter</a></li>
    <li><a href="https://www.facebook.com/share.php?u=http://mafi.app" rel="nofollow" target="_blank">Facebook</a></li>
    <li><a href="mailto:?body=Mafia%20Vs%20Painter%20http://mafi.app" rel="nofollow" target="_blank">Mail</a></li>
  </ul>

  <ul v-else>
    <li><a href="https://twitter.com/share?url=https://mafi.app&text=「マフィアと絵描き」ゲームを今すぐプレイ%20%23game" rel="nofollow" target="_blank">Twitter</a></li>
    <li><a href="https://www.facebook.com/share.php?u=http://mafi.app" rel="nofollow" target="_blank">Facebook</a></li>
    <li><a href="https://social-plugins.line.me/lineit/share?url=https://mafi.app&title=マフィアと絵描き" rel="nofollow" target="_blank">LINE</a></li>
    <li><a href="https://b.hatena.ne.jp/add?mode=confirm&url=https://mafi.app&title=マフィアと絵描き" rel="nofollow" target="_blank">はてなブックマーク</a></li>
    <li><a href="mailto:?body=「マフィアと絵描き」ゲームを今すぐプレイ%20http://mafi.app" rel="nofollow" target="_blank">メール</a></li>
  </ul>

</div></template>


<script>
export default {
  name: 'PageShare',
}
</script>


<style lang="scss" scoped>
</style>
