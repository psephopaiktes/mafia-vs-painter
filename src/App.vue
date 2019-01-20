<template><div id="app">
  <router-view />
  <NavMenu />
</div></template>

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

<style lang="scss">
.page-enter-active {
  animation: slideIn .2s;
  animation-timing-function: ease;
  animation-delay: 0;
  opacity: 0;
}
@keyframes slideIn {
  from {
    transform: translateX(32px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

///////////////////////////////////////////////////////////////////////////////
// Global style
///////////////////////////////////////////////////////////////////////////////
html {
  background-color: rgba($COLOR_BASE,.6);
  background-image: url(/img/paper.png);
  background-blend-mode: multiply;
  background-size: 281px auto;
  color: $COLOR_MAIN;
  overscroll-behavior: none;
}
body {
  overscroll-behavior: none;
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: rgba($COLOR_MAIN,.8);
  line-height: 1.7;
  font-weight: 400;
  font-family: "M PLUS Rounded 1c", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ Pro W3", "游ゴシック", "Yu Gothic", YuGothic, Meiryo, "メイリオ", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-feature-settings: "pwid";
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  list-style-type: none;
}
img {
  border: none;
  vertical-align: top;
  max-width: 100%;
}
b{
  font-weight: bold;
}
a,
area,
button,
[role="button"],
input:not([type="range"]),
label,
select,
summary,
textarea {
  touch-action: manipulation;
}
button{
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
}
.container {
  width: calc(100% - 64px);
  padding-bottom: 128px;
  max-width: 480px;
  margin: 0 auto;
}

///////////////////////////////////////////////////////////////////////////////
// Common UI
///////////////////////////////////////////////////////////////////////////////
.headline{
  margin: 32px auto 0;
  font-size: 28px;
  line-height: 2;
  border-left: 2px solid $COLOR_THEME;
  padding-left: 12px;
}
p.infoCell{
  border-radius: 4px;
  margin-top: 32px !important;
  padding: 12px 12px 12px 38px;
  background: rgba($COLOR_MAIN,.3);
  color: #fff;
  position: relative;
  font-size: 12px;
  &::before{
    content: "?";
    display: block;
    position: absolute;
    top: 15px;
    left: 12px;
    background: #fff;
    color: rgba($COLOR_MAIN,.4);
    font-size: 14px;
    text-align: center;
    font-weight: bold;
    width: 18px;
    height: 18px;
    line-height: 18px;
    border-radius: 9px;
  }
}
@keyframes bottomButtons {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.bottomButtons{
  position: fixed;
  z-index: 901;
  height: auto;
  bottom: 32px;
  left: 64px;
  text-align: center;
  /* 以下の理由により遅延表示させている */
  /* 1. CSS表示バグによりがたつく */
  /* 2. 押し間違いを防ぐ */
  &.fade{
    opacity: 0;
    animation: bottomButtons .2s ease .2s forwards;
  }
  .button{
    display: block;
    margin: 12px auto 0;
    text-decoration: none;
    line-height: 64px;
    letter-spacing: .1em;
    font-weight: 400;
    box-shadow: 0 4px 8px rgba($COLOR_MAIN,.2);
    font-size: 20px;
    transition: .2s ease;
    &:hover,&:active{
      transform: scale(1.02);
      filter: brightness(105%);
    }
  }
  .primary{
    background: $COLOR_THEME;
    color: #fff;
    height: 64px;
    line-height: 60px;
    width: calc(100vw - 128px);
  }
  .secondary{
    background: #fff;
    border: 4px solid $COLOR_THEME;
    color: $COLOR_THEME;
    height: 48px;
    line-height: 44px;
    width: calc(100vw - 144px);
  }
}

.mt-8{ margin-top: 8px; }
.mt-24{ margin-top: 24px; }
.fc-theme{ color: $COLOR_THEME }
</style>
