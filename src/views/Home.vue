<template><div class="home">

  <section class="key">
    <h1><img src="/img/logo.svg" alt="Mafia Vs. Painter"></h1>
    <div class="scrollPrompt"></div>
  </section>

  <section class="abstract">
    <h2>スマホ1台ですぐにできる、超お手軽ゲーム。</h2>
    <p>スマホやパソコンが1台あれば、すぐにみんなで遊べる簡単なゲームです。<b>インストールも不要</b>です。お題にそってひと筆ずつお絵描きし、ひとりだけ紛れ込んだニセモノを見つけ出しましょう。</p>
    <img src="" alt="プレイ人数3から8人、プレイ時間10分前後、対象年齢7歳以上">
  </section>

  <section class="story">
    <h2>ストーリー</h2>
    <p>優秀な絵描きたちが集まる絵のコンテスト、優勝賞金は1億円です。そこへ通りがかったマフィアが、こっそりコンテストに潜入しました。</p>
    <p>マフィアは絵描きのふりをして油断させ、優勝賞金を奪うつもりです。ただし彼はすこし遅刻したせいで、絵のお題を知りません。</p>
    <img src="" alt="ストーリーのイメージ1">
    <p>絵描きたちは偽物が参加していることに気づいて、マフィアを発見しないと、皆殺しにされてしまいます。</p>
    <p>さて、マフィアが勝つか、絵描きが勝つか、勝敗は彼らの演技力と洞察力にかかっています...。</p>
    <img src="" alt="ストーリーのイメージ2">
  </section>

  <section class="howto">
    <h2>あそびかた</h2>
    <p>このゲームでは1人がマフィア、他の全員が絵描きになって戦います。<b>各画面にヒントが書いてます</b>ので、この説明を覚えなくてもプレイ可能です。</p>
    <p><span>1</span>スタートボタンを押すとゲーム開始です。参加するプレイヤーの名前を入力し、ひとりずつ順番にこっそり絵のお題を確認します。このとき、ランダムな1人はマフィアに選ばれ、お題がわかりません。お題がどんなカテゴリ（スポーツ、食べ物など）から出されるかは全員に教えられます。</p>
    <p><span>2</span>確認が終わったら<b>順番に1人1本ずつ線を引き、</b>お題の絵を描いていきます。スマホやパソコン上に描くことも、紙とペンで描くこともできます。マフィアはお題を知らないので、知ってるふりをして線を描き、他の人の線からお題を推測します。絵描きはマフィアにお題がバレないように、しかし仲間の絵描きには伝わるように線を描きます。</p>
    <p><span>3</span>2巡したらゲーム終了です。「せーの」でそれぞれがマフィアだと思う人を指さします。多数決でマフィアが選ばれなければ、マフィアの勝利です。多数決でマフィアが選ばれても、お題を当てたらマフィアの勝ちです。つまり、絵描きはマフィアが誰かを当てて、なおかつお題がバレないようにしなければいけません。</p>
  </section>

  <footer>
    <a href="https://twitter.com/psephopaiktes" target="_brank">© Akira HIRATA 2019</a>
  </footer>

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
    transform: scale(.2) rotate(-60deg);
    opacity: 0;
  }
  80% {
    transform: scale(1.2) rotate(0deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}
@keyframes scroll {
  0% {
    transform: translateY(-16px) rotate(-45deg);
    opacity: 0;
  }
  50% {
    transform: translateY(0) rotate(-45deg);
    opacity: .3;
  }
  100% {
    transform: translateY(16px) rotate(-45deg);
    opacity: 0;
  }
}
.key{
  height: 100vh;
  background-image: url(/img/building.svg), radial-gradient(circle, transparent 40%, rgba(#300,.2) );
  background-size: 100% auto;
  background-repeat: repeat-x;
  background-attachment: fixed;
  padding-top: 24vh;
  @include min ($WIDTH_MOBILE){
    background-size: 50% auto;
  }
  h1{
    width: calc(100% - 32px);
    max-width: 360px;
    margin: 0 auto;
    opacity: 0;
    transform: scale(1) rotate(0deg);
    animation: logo .4s ease-in forwards;
  }
  .scrollPrompt{
    width: 20px;
    height: 20px;
    border: 4px solid #000;
    border-width: 0 0 4px 4px;
    margin: 48px auto 0;
    transform: translateY(0) rotate(-45deg);
    opacity: 0;
    animation: scroll 6s ease .4s infinite;
  }
}

section:not(:first-child){
  padding: 48px 32px 64px;
  text-align: justify;
  color: #fff;
  p{
    margin-top: 16px;
    opacity: .8;
  }
  background: darken($COLOR_THEME,8%);
  position: relative;
  &::before{
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: calc(100% - 1px);
    background-image: linear-gradient(-90deg, transparent 50%, darken($COLOR_THEME,8%) 50%);
    height: 4vw;
    background-size: 8vw 4vw;
    @include min ($WIDTH_MOBILE){
      height: 2.22vw;
      background-size: 4.45vw 2.22vw;
    }
  }
}
section.story{
  background: $COLOR_BASE;
  color: $COLOR_MAIN;
  &::before{
    background-image: linear-gradient(-90deg, transparent 50%, $COLOR_BASE 50%);
  }
}
section.howto{
  p span{
    background: rgba(#fff,.8);
    color: $COLOR_THEME;
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    margin-right: 6px;
    font-weight: bold;
  }
}
footer{
  text-align: center;
  padding: 24px 0 32px;
  a{
    text-decoration: none;
    color: $COLOR_MAIN;
    opacity: .8;
  }
}
</style>
