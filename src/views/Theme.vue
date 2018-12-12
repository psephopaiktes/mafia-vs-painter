<template>
  <div class="theme">
    <h1>{{ $store.state.en ? 'Theme' : 'お題の確認' }}</h1>
    <transition name="page">
      <router-view :step="step" @stepUp="stepUp()" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'theme',
  data() {
    return {
      step: 0,
    };
  },
  methods: {
    stepUp() {
      this.step++;
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
