<template><div class="home">

  <section class="key">
    <h1><img src="/img/logo.svg" alt="Mafia Vs. Painter"></h1>
    <a class="scrollPrompt" href="#scroll">{{ $store.state.en ? 'scroll' : 'スクロール' }}<br>▼</a>
  </section>

  <section class="abstract" id="scroll">
    ほにゃほにゃ
  </section>

  <section class="help">
    <h2>あそびかた</h2>
  </section>

  <div class="bottomButtons">
    <router-link to="/init" class="button primary">{{ $store.state.en ? 'START' : 'スタート' }}</router-link>
  </div>

</div></template>

<script>
export default {
  name: 'home',
  components: {
  },
};
</script>


<style lang="scss" scoped>
/* .home-leave-active{
  transition: opacity 1s;
}
.home-leave-to{
  opacity: 0;
} */

.home{
  padding-bottom: 96px;
}

@keyframes logo {
  0% {
    transform: scale(.2);
    opacity: 0;
  }
  80% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: .6;
  }
}
@keyframes scroll {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
    opacity: .4;
  }
  100% {
    transform: translateY(20px);
    opacity: 0;
  }
}
.key{
  height: 100vh;
  background-image: url(/img/building.svg);
  background-size: 100% auto;
  background-repeat: repeat-x;
  padding-top: 25vh;
  @include min ($WIDTH_MOBILE){
    background-size: 50% auto;
  }
  h1{
    width: calc(100% - 64px);
    max-width: 320px;
    margin: 0 auto;
    opacity: 0;
    transform: scale(1);
    animation: logo .4s ease-in forwards;
  }
  .scrollPrompt{
    display: block;
    text-align: center;
    text-decoration: none;
    color: $COLOR_MAIN;
    margin: 64px auto 0;
    transform: translateY(0);
    /* line-height: 1; */
    opacity: 0;
    animation: scroll 4s ease 1s infinite;
  }
}

.abstract{
  padding: 64px;
  text-align: center;
  color: #fff;
  background: rgba($COLOR_MAIN,.8);
}
</style>
