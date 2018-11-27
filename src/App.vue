<template>
  <div id="app">
    <div class="container">
      <router-view />
      <!-- <router-view :state="state" @toggleLang="toggleLang" /> -->
    </div>
    <!-- <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/init">Init</router-link>
    </nav> -->
  </div>
</template>


<script>
// import navController from '@/components/HelloWorld.vue';

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
};
</script>


<style lang="scss">
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);

  html{
    font-size: 10px;
    @media ( max-width: 640px ){ font-size: 10.71px } //TODO
    @media ( max-width: 640px ){ font-size: 11.43px }
    background: $COLOR_BASE;
    background-image: url(/img/paper.png);
    color: $COLOR_MAIN;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
    line-height: 1.7;
    font-weight:500;
    font-family: "Hiragino Kaku Gothic ProN","ヒラギノ角ゴ Pro W3","游ゴシック","Yu Gothic",
    YuGothic,Meiryo,"メイリオ",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-feature-settings : "pwid";
    text-align: center;
  }
  *,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul {
    list-style-type:none;
  }
  img {
    border: none;
    vertical-align: top;
    max-width: 100%;
  }
  a, area, button, [role="button"], input:not([type="range"]), label, select, summary, textarea {
    touch-action: manipulation;
  }
  .container{
    width: calc(100% - 64px);
    max-width: 480px;
    margin: 0 auto;
  }
</style>
