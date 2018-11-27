<template>
  <div class="init">
    <h1>{{ state.en ? 'Theme' : 'お題の確認' }}</h1>
    <!-- <p>{{ state.en ? 'TOEN' : 'ゲームに参加するプレイヤーの名前を入力してください。4人から8人まで参加可能です。' }}</p> -->
    <!-- <navController>
      <ButtonPrimary link="">OK</ButtonPrimary>
    </navController> -->
    <!-- <navContent /> -->
  </div>
</template>

<script>
export default {
  name: 'theme',
  props: { state: Object },
  methods: {
  },
  mounted() {
  },
};
</script>


<style lang="scss" scoped>
</style>
