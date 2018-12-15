<template>
  <div id="app">
    <div class="container">
      <transition name="page">
        <router-view />
      </transition>
    </div>
    <NavMenu />
  </div>
</template>


<script>
import NavMenu from '@/components/NavMenu.vue';

export default {
  name: 'app',
  created() {
    // すでにLSにStateがある場合はそちらを優先してVuexを上書き
    if( localStorage.state ){
      this.$store.replaceState( JSON.parse(localStorage.state) );
    }
    // LSにStateが無く(初回アクセス)、なおかつブラウザ言語が日本語の場合
    // Mutation使わずに書き換えてるので良くない気がする
    else if( navigator.language == 'ja-JP' ){
      this.$store.state.en = false;
    }
    // VuexのStateが変更されたら都度LSに上書き
    this.$store.watch(
      state => state,
      () => { localStorage.state = JSON.stringify(this.$store.state); },
      { deep: true },
    );
  },
  components: {
    NavMenu,
  },
};
</script>

<style lang="sass" href="@/const/common.scss">
</style>
