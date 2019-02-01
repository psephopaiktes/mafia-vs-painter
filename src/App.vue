<template><div id="app">
  <router-view class="blurContainer" :class="{ isBlur: $store.state.menuOpen }" />
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
    //Reload時の処理
    window.addEventListener("beforeunload", (e) => {
      if(this.$route.path != '/' && this.$route.path != '/init' && this.$route.path != '/theme'){
        e.preventDefault();
        e.returnValue = 'リロードするとゲームは最初からになります。よろしいですか？';
      }
    });
  },
  mounted() {
    document.getElementById('loading').style.display="none";
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
.blurContainer{
  transition: 0 ease 0s;
  &.isBlur{
    transition: .2s ease .1s;
    filter: blur(4px);
  }
}

///////////////////////////////////////////////////////////////////////////////
// Global style
///////////////////////////////////////////////////////////////////////////////
html {
  background-color: rgba($COLOR_BASE,.6);
  background-image: url(/img/paper.png);
  background-blend-mode: multiply;
  color: $COLOR_MAIN;
  overscroll-behavior: none;
}
body {
  overscroll-behavior: none;
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: rgba($COLOR_MAIN,.8);
  line-height: 1.7;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "ヒラギノ角ゴ Pro W3", "游ゴシック", "Yu Gothic", YuGothic, Meiryo, "メイリオ";
  font-feature-settings : "pkna";
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
a{ color: $COLOR_THEME }
a:visited{ color: darken($COLOR_THEME, 8%) }
a:hover{ color: lighten($COLOR_THEME, 4%) }
a:active{ color: darken($COLOR_THEME, 8%) }
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

///////////////////////////////////////////////////////////////////////////////
// Common UI
///////////////////////////////////////////////////////////////////////////////
.container {
  width: calc(100% - 64px);
  padding-bottom: 184px;
  max-width: 480px;
  margin: 0 auto;
}
.headline{
  margin: 48px -48px 0;
  opacity: .6;
  display: inline-block;
  padding: 16px 36px;
  transform: rotate(-6deg);
  transform-origin: 0 100%;
  line-height: 1;
  font-size: 20px;
  color: $COLOR_BASE;
  background-image: url(/img/brush.png);
  background-size: 100% 100%;
  letter-spacing: .1em;
}
p.infoCell{
  border-radius: 4px;
  margin-top: 32px !important;
  padding: 12px 12px 12px 38px;
  background: rgba($COLOR_MAIN,.08);
  color: rgba($COLOR_MAIN,.6);
  position: relative;
  font-size: 12px;
  &::before{
    content: "?";
    display: block;
    position: absolute;
    top: 15px;
    left: 12px;
    background: rgba($COLOR_MAIN,.3);
    color: rgba(#fff,.6);
    font-size: 12px;
    text-align: center;
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
  @include min ($WIDTH_MOBILE){
    left: calc( 50% - 240px);
  }
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
    cursor: pointer;
    &:hover,&:active{
      transform: scale(1.02);
      filter: brightness(105%);
      @include min ($WIDTH_MOBILE){
        transform: scale(1.008);
      }
    }
  }
  .primary{
    background: $COLOR_THEME;
    color: #fff;
    height: 64px;
    line-height: 60px;
    width: calc(100vw - 128px);
    @include min ($WIDTH_MOBILE){
      width: 480px;
    }
  }
  .secondary{
    background: #fff;
    border: 4px solid $COLOR_THEME;
    color: $COLOR_THEME;
    height: 48px;
    line-height: 42px;
    width: calc(100vw - 144px);
    @include min ($WIDTH_MOBILE){
      width: 460px;
    }
  }
}

.mt-8{ margin-top: 8px; }
.mt-24{ margin-top: 24px; }
.fc-theme{ color: $COLOR_THEME }
</style>
