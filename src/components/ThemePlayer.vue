<template>
  <div class="theme">

    <h2>{{ $store.state.en ? $route.params.player : $route.params.player+'さん' }}</h2>

    <div v-if="$route.params.player == $store.state.mafia">
      <p>あなたはマフィアです。</p>
      <p>他の人にバレないように絵を描きながら、お題がなにかを探ってください。</p>
    </div><div v-else>
      <p>あなたは絵描きです。</p>
      <p>今回のお題は「{{$store.state.theme}}」です。</p>
      <p>マフィアにはお題がばれないように絵を描きながら、誰がマフィアかを探ってください。</p>
    </div>

    <p>{{ $store.state.en ? 'TOEN' : '確認できたら、「OK」ボタンを押してください。' }}</p>

    <div v-if="step>=$store.state.player.length">
      <router-link to="/draw/select">OK</router-link>
    </div><div v-else>
      <router-link to="/theme/">OK</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'themePlayer',
  props: { step: Number, },
  methods: {
  },
  mounted() {
    this.$emit('stepUp');
  },
};
</script>


<style lang="scss" scoped>
</style>
