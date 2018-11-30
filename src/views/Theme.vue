<template>
  <div class="theme">
    step:
    {{props.step}}

    <h1>{{ $store.state.en ? 'Theme' : 'お題の確認' }}</h1>
    <router-view :props="props" @stepUp="stepUp()" />
    <!-- <navController>
      <ButtonPrimary link="">OK</ButtonPrimary>
    </navController> -->
    <!-- <navContent /> -->
  </div>
</template>

<script>
export default {
  name: 'theme',
  data() {
    return {
      props: {
        step: 0,
      },
    };
  },
  methods: {
    stepUp() {
      this.props.step++;
    },
  },
  mounted() {
    this.$store.commit('selectCategoryTheme');
    this.$store.commit('selectMafia');
    this.$store.commit('shufflePlayer');
  },
};
</script>


<style lang="scss" scoped>
</style>
