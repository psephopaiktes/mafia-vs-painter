<template><div class="home">

  <section class="key">
    <h1><imgLogo /></h1>
    <p class="subTitle" v-if="!$store.state.en">マフィアと絵描き</p>
    <p style="text-align:center;margin-top:8px;">ver0.5.0 closed beta.</p>
    <div class="scrollPrompt"></div>
  </section>

  <section class="abstract">
    <h2>{{ $store.state.en ? 'play with everyone, with a smartphone.' : 'スマホ１台ですぐにできる、超お手軽ゲーム。' }}</h2>
    <p>{{ $store.state.en ? 'If you have one smartphone or PC, it is a simple game that you can play with immediately. No installation required. Follow the theme and paint a stroke one by one and find out where you can only get one misunderstood.' : 'スマホやパソコンが１台あれば、すぐにみんなで遊べる簡単なゲームです。インストールも不要です。お題にそってひと筆ずつお絵描きし、ひとりだけ紛れ込んだニセモノを見つけ出しましょう。' }}</p>
    <ul class="gameInfo">
      <li>{{ $store.state.en ? '4-8' : '４〜８人' }}</li>
      <li>{{ $store.state.en ? '10min' : '１０分前後' }}</li>
      <li>{{ $store.state.en ? 'age7↑' : '７歳以上' }}</li>
    </ul>
  </section>

  <section class="story">
    <h2>{{ $store.state.en ? 'STORY' : 'ストーリー' }}</h2>
    <p><img src="https://via.placeholder.com/400x100" alt="ストーリーのイメージ">{{ $store.state.en ? 'A painting contest where excellent painters gathered was held. The strewn mafia there sneaked into the contest secretly.' : '優秀な絵描きたちが集まる絵のコンテストがありました。そこへ通りがかったマフィアが、こっそりコンテストに潜入。' }}</p>
    <p><img src="https://via.placeholder.com/400x100" alt="ストーリーのイメージ">{{ $store.state.en ? 'Mafia pretends to be a painter, hides and takes the prize money. However, he is a little late and he does not know the subject of the painting.' : 'マフィアは絵描きのふりをして隠れ、賞金を奪うつもりです。ただし彼はすこし遅刻したせいで、絵のお題を知りません。' }}</p>
    <p><img src="https://via.placeholder.com/400x100" alt="ストーリーのイメージ">{{ $store.state.en ? 'Painters will be killed as long as they do not discover the mafia by noticing that the fakes are participating.' : '絵描きたちは偽物が参加していることに気づいて、マフィアを発見しないと、皆殺しにされてしまいます。' }}</p>
    <p><img src="https://via.placeholder.com/400x100" alt="ストーリーのイメージ">{{ $store.state.en ? 'Well, Mafia will win, Painting will win, Winning or losing depends on their performance and insight ....' : 'さて、マフィアが勝つか、絵描きが勝つか、勝敗は彼らの演技力と洞察力にかかっています...。' }}</p>
  </section>

  <section class="howto">
    <h2>{{ $store.state.en ? 'HOW TO PLAY' : 'あそびかた' }}</h2>
    <p>{{ $store.state.en ? 'In this game one becomes a role of mafia, everyone else becomes a painter.  Hints are show on each screen , so you can play without learning this explanation.' : 'このゲームでは１人がマフィア、他の全員が絵描きになって戦います。各画面にヒントが書いてますので、この説明を覚えなくてもプレイ可能です。' }}</p>
    <p><span>1</span>{{ $store.state.en ? 'When you press the start button, the game starts. Enter the names of players to join and check the subject of the picture secretly one by one one by one. One random person is chosen as a mafia and I can not tell you the subject. Everyone will be taught what categories (sports, food etc.) the subject will be issued.' : 'スタートボタンを押すとゲーム開始です。参加するプレイヤーの名前を入力し、ひとりずつ順番にこっそり絵のお題を確認します。このとき、ランダムな１人はマフィアに選ばれ、お題がわかりません。お題がどんなカテゴリ（スポーツ、食べ物など）から出されるかは全員に教えられます。' }}<img src="https://via.placeholder.com/400x100" alt="ストーリーのイメージ"></p>
    <p><span>2</span>{{ $store.state.en ? 'When you are done,  draw each line one by one,  and draw the subject picture. You can draw on a device, or you can draw with paper. Since the Mafia does not know the subject, pretend to know, draw a line, and guess the subject from the line of others. Paintings do not have a title on the mafia, but draw a line to convey to the fellow\'s paintings.' : '確認が終わったら順番に１人１本ずつ線を引き、お題の絵を描いていきます。スマホやパソコン上に描くことも、紙とペンで描くこともできます。マフィアはお題を知らないので、知ってるふりをして線を描き、他の人の線からお題を推測します。絵描きはマフィアにお題がバレないように、しかし仲間の絵描きには伝わるように線を描きます。' }}<img src="https://via.placeholder.com/400x100" alt="ストーリーのイメージ"></p>
    <p><span>3</span>{{ $store.state.en ? 'I will vote after two rounds. At the same time, it points to a person who thinks that each is a mafia. If the mafia is not chosen by majority decision, it is the victory of the mafia. Even if Mafia is chosen by a majority decision, the mafia wins if you hit the subject.' : '２巡したらゲーム終了です。「せーの」でそれぞれがマフィアだと思う人を指さします。多数決でマフィアが選ばれなければ、マフィアの勝利です。多数決でマフィアが選ばれても、お題を当てたらマフィアの勝ちです。つまり、絵描きはマフィアが誰かを当てて、なおかつお題がバレないようにしなければいけません。' }}<img src="https://via.placeholder.com/400x100" alt="ストーリーのイメージ"></p>
  </section>

  <footer>
    <a href="https://twitter.com/psephopaiktes" target="_brank">© Akira HIRATA 2019</a>
  </footer>

  <div class="bottomButtons">
    <router-link to="/init" class="button primary">{{ $store.state.en ? 'START' : 'スタート' }}</router-link>
  </div>

</div></template>


<script>
import imgLogo from '@/components/img/logo.vue';

export default {
  name: 'home',
  components: {
    imgLogo,
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
    opacity: 1;
  }
  100% {
    transform: translateY(16px) rotate(-45deg);
    opacity: 0;
  }
}
@keyframes city {
  0% { background-position: 0 0, 0 0 }
  100% { background-position: -100vw 0, 0 0 }
}

.key{
  background-image: url(/img/building.svg), radial-gradient(circle, transparent 40%, rgba(#300,.2) );
  background-size: 100% auto, 100% auto;
  background-repeat: repeat-x;
  background-attachment: fixed;
  background-position: 0 0, 0 0;
  padding: 120px 0 80px;
  transform: none;
  filter: none;
  animation: city 64s linear infinite;
  @include min ($WIDTH_MOBILE){
    padding: 160px 0 100px;
    background-size: 50% auto, 100% auto;
    animation: city 128s linear infinite;
  }
  h1{
    width: calc(100% - 32px);
    max-width: 400px;
    margin: 0 auto;
    opacity: 0;
    transform: scale(1) rotate(0deg);
    animation: logo .4s ease-in forwards;
  }
  .subTitle{
    color: darken($COLOR_THEME,16%);
    text-align: center;
    letter-spacing: .4em;
    text-indent: .4em;
    margin-top: 12px;
    opacity: .7;
    position: relative;
    &::before,&::after{
      content: "";
      display: block;
      position: absolute;
      width: 4em;
      height: 1px;
      background: darken($COLOR_THEME,20%);
      opacity: .5;
      top: 49%;
    }
    &::before{ right: calc(50% + 6em) }
    &::after{ left: calc(50% + 6em) }
  }
  .scrollPrompt{
    width: 20px;
    height: 20px;
    border: 4px solid #fff;
    filter: drop-shadow(0 0 8px rgba(#000,.1) );
    border-width: 0 0 4px 4px;
    margin: 24px auto 0;
    transform: translateY(0) rotate(-45deg);
    opacity: 0;
    animation: scroll 4s ease .4s infinite;
  }
}

section:not(:first-child){
  padding: 56px 32px 72px;
  @include min ($WIDTH_MOBILE){
    padding: 120px calc(50% - 20em) 136px;
  }
  color: #fff;
  p{
    margin-top: 24px;
    opacity: .9;
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
section.abstract{
  h2{
    font-size: 1.7em;
    line-height: 1.5;
  }
  .gameInfo{
    margin-top: 16px;
    display: flex;
    li{
      margin-right: 8px;
      width: 72px;
      height: 72px;
      padding-top: 44px;
      border: 5px solid $COLOR_MAIN;
      color: $COLOR_MAIN;
      border-radius: 12px;
      text-align: center;
      font-size: 11px;
      letter-spacing: .1em;
      opacity: .6;
      position: relative;
      font-weight: bold;
      &::before{
        content: "";
        display: block;
        position: absolute;
        width: 40px;
        height: 40px;
        top: 4px;
        left: calc(50% - 20px);
        background-size: 120px 40px;
        background-image:url('data:image/svg+xml,<svg enable-background="new 0 0 120 40" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><g fill="#211"><path d="m60 2c-9.9 0-18 8.1-18 18s8.1 18 18 18 18-8.1 18-18-8.1-18-18-18zm0 32.4c-8 0-14.4-6.4-14.4-14.4s6.4-14.4 14.4-14.4 14.4 6.4 14.4 14.4-6.4 14.4-14.4 14.4zm-.4-23.4c-.8 0-1.4.6-1.4 1.3v8.5c0 .6.3 1.2.9 1.5l7.5 4.5c.6.4 1.4.2 1.8-.4s.2-1.4-.5-1.8l-7-4.1v-8.2c0-.7-.6-1.3-1.3-1.3z"/><path d="m109.6 18.1h-.9c3.6-1.3 5.4-5.3 4.1-8.9s-5.3-5.4-8.9-4.1-5.4 5.3-4.1 8.9c.7 1.9 2.2 3.4 4.1 4.1h-.9c-1.1 0-2.1.2-3.1.7 1.4 3 .9 6.6-1.4 9 2.5 1.9 3.9 4.8 3.9 7.9h14.6v-10.2c0-4.1-3.3-7.4-7.4-7.4z"/><path d="m95.1 28c3.2-1.4 4.7-5.1 3.3-8.3s-5.1-4.7-8.3-3.3-4.7 5.1-3.3 8.3c.6 1.5 1.8 2.6 3.3 3.3-3.3 1.1-5.5 4.2-5.5 7.6h16.2c-.2-3.4-2.4-6.5-5.7-7.6z"/><path d="m8.9 8.8c0-2.4-2-4.3-4.4-4.3s-4.3 2-4.3 4.4c0 1.9 1.3 3.6 3.1 4.1-1.7 0-3 1.4-3 3.1v19.1c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5.4h1.3v5.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-19.2c0-1.7-1.3-3-3-3.1 1.8-.5 3.1-2.2 3.1-4.1z"/><path d="m19.2 8.8c0-2.4-2-4.3-4.4-4.3s-4.3 2-4.3 4.4c0 1.9 1.3 3.6 3.1 4.1-1.7 0-3 1.4-3 3.1v19.1c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5.4h1.3v5.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-19.2c0-1.7-1.3-3-3-3.1 1.8-.5 3.1-2.2 3.1-4.1z"/><path d="m29.5 8.8c0-2.4-2-4.3-4.4-4.3s-4.3 2-4.3 4.4c0 1.9 1.3 3.6 3.1 4.1-1.7 0-3 1.4-3 3.1v19.1c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5.4h1.3v5.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-19.2c0-1.7-1.3-3-3-3.1 1.8-.5 3.1-2.2 3.1-4.1z"/><path d="m36.7 13c2.3-.7 3.6-3.1 2.9-5.4s-3.1-3.6-5.4-2.9-3.6 3.1-2.9 5.4c.4 1.4 1.5 2.5 2.9 2.9-1.7 0-3 1.4-3 3.1v19.1c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5.4h1.3v5.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-19.2c-.1-1.6-1.4-2.9-3-3z"/></g></svg>');
      }
      &:nth-child(1)::before{ background-position: 0 0 }
      &:nth-child(2)::before{ background-position: -40px 0 }
      &:nth-child(3)::before{ background-position: -80px 0 }
    }
  }
}

section.story h2,
section.howto h2{
  margin: 0 -48px;
  opacity: .6;
  display: inline-block;
  padding: 16px 36px;
  transform: rotate(-6deg);
  transform-origin: 0 100%;
  line-height: 1;
  font-size: 20px;
  background-size: 100% 100%;
  letter-spacing: .1em;
}
section.story h2{
  color: $COLOR_BASE;
  background-image: url(/img/brush.png);
}
section.howto h2{
  color: darken($COLOR_THEME,8%);
  background-image: url(/img/brush--white.png);
}

section.story{
  background: $COLOR_BASE;
  color: darken($COLOR_THEME,16%);
  img{
    display: block;
    width: 100%;
    max-width: 400px;
    margin: 0 auto 8px;
  }
  &::before{
    background-image: linear-gradient(-90deg, transparent 50%, $COLOR_BASE 50%);
  }
}
section.howto{
  p span{
    background: #fff;
    color: $COLOR_THEME;
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    margin-right: 6px;
    font-weight: bold;
  }
  img{
    display: block;
    width: 100%;
    max-width: 400px;
    margin: 8px auto 0;
  }
  &::after{
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    left: 0;
    top: calc(100% - 1px);
    background-image: linear-gradient(-90deg, transparent 50%, darken($COLOR_THEME,8%) 50%);
    height: 4vw;
    background-size: 8vw 4vw;
    @include min ($WIDTH_MOBILE){
      height: 2.22vw;
      background-size: 4.45vw 2.22vw;
    }
  }
}
footer{
  text-align: center;
  padding: 48px 0;
  a{
    text-decoration: none;
    color: $COLOR_MAIN;
    opacity: .6;
    font-weight: bold;
  }
}
</style>
