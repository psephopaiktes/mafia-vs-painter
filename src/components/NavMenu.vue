<template>
  <nav class="navMenu">
    <transition name="navMenu__footer"><footer class="navMenu__footer" v-show="!$store.state.menuOpen">
      <button class="menu" @click="openMenu"><iconMenu class="iconMenu" /></button>
      <button class="lang" @click="$store.commit('changeLang')" v-if="$route.path=='/'">
        <iconLanguageEn v-if="$store.state.en" class="iconLanguage" />
        <iconLanguageJp v-else class="iconLanguage" />
      </button>
    </footer></transition>
    <!-- ↓ここのsectionをルーティング? -->
    <!-- ↓そんなタブみたいなことできるかは調査-->
    <!-- ↓動きだけここで定義? -->
    <div
      id="navMenu__content"
      class="navMenu__content"
      v-show="$store.state.menuOpen"
      @touchend="touchEndInteraction($event.target)" >
      <div class="mask" @click.prevent.stop="closeMenu"></div>
      <section id="navMenu__menu" class="navMenu__menu"><transition name="menu" mode="out-in">

        <div v-if="currentPage == 'top'" key="top">
          <h2>
            <button @click="closeMenu"><iconClose /></button>
            MENU
          </h2>
          <ul class="menuList">
            <li class="restrat" @click="currentPage = 'restart'" v-if="$route.path != '/'">{{ $store.state.en ? 'Restart' : 'やりなおす' }}</li>
            <li class="record" @click="currentPage = 'record'">{{ $store.state.en ? 'Record' : '戦績' }}</li>
            <li class="share" @click="currentPage = 'share'">{{ $store.state.en ? 'Share' : 'シェアする' }}</li>
            <li class="clear" @click="currentPage = 'clear'">{{ $store.state.en ? 'Data Clear' : 'データ消去' }}</li>
            <li class="information" @click="currentPage = 'information'">{{ $store.state.en ? 'Information' : 'このゲームについて' }}</li>
          </ul>
        </div>

        <div v-else-if="currentPage == 'record'" key="record">
          <h2>
            <button @click="currentPage = 'top'"><iconArrowBack /></button>
            {{ $store.state.en ? 'Record' : '戦績' }}
          </h2>
          <pageRecord />
        </div>

        <div v-else-if="currentPage == 'restart'" key="restart">
          <h2>
            <button @click="currentPage = 'top'"><iconArrowBack /></button>
            {{ $store.state.en ? 'Restart' : 'やりなおす' }}
          </h2>
          <pageRestart />
        </div>

        <div v-else-if="currentPage == 'clear'" key="clear">
          <h2>
            <button @click="currentPage = 'top'"><iconArrowBack /></button>
            {{ $store.state.en ? 'Data Clear' : 'データ消去' }}
          </h2>
          <pageClear />
        </div>

        <div v-else-if="currentPage == 'share'" key="share">
          <h2>
            <button @click="currentPage = 'top'"><iconArrowBack /></button>
            {{ $store.state.en ? 'Share' : 'シェアする' }}
          </h2>
          <pageShare />
        </div>

        <div v-else-if="currentPage == 'information'" key="information">
          <h2>
            <button @click="currentPage = 'top'"><iconArrowBack /></button>
            {{ $store.state.en ? 'Information' : 'このゲームについて' }}
          </h2>
          <pageInformation />
        </div>

        <div v-else key="error">
          <h2>
            <button @click="closeMenu"><iconClose /></button>
            Error
          </h2>
          <div class="menuContent"><p>Error</p></div>
        </div>

      </transition></section>
    </div>
  </nav>
</template>


<script>
import iconMenu from '@/components/icon/menu.vue';
import iconLanguageJp from '@/components/icon/language_jp.vue';
import iconLanguageEn from '@/components/icon/language_en.vue';
import iconClose from '@/components/icon/close.vue';
import iconArrowBack from '@/components/icon/arrow_back.vue';

import PageRecord from '@/components/navPage/Record.vue';
import PageRestart from '@/components/navPage/Restart.vue';
import PageClear from '@/components/navPage/Clear.vue';
import PageShare from '@/components/navPage/Share.vue';
import PageInformation from '@/components/navPage/Information.vue';

// アニメーション設定
const duration = 18; // 60 * second
const easing = function (pos) { // swing
  var s = 1.70158;
  return (pos-=1)*pos*((s+1)*pos + s) + 1;
};
const easeScroll = (percent) => {
  const el = document.getElementById('navMenu__content');
  const start = el.scrollTop;
  const range = percent * window.innerHeight;
  const diff = range - start;
  let position, i = 0;
  return new Promise(function (resolve) {
    const move = function () {
        i++;
        position = start + (diff * easing(i / duration));
        el.scrollTo(0, position);
        if ( i != duration ){
        // if ( ( diff <= 0 && range < position ) || ( diff > 0 && position < range ) ){
          requestAnimationFrame(move);
          return;
        }
        resolve();
    };
    requestAnimationFrame(move);
  });
};

export default {
  name: 'NavMenu',
  data() {
    return {
      scrollTrigger: false,
      currentPage: 'top',
    };
  },
  methods: {
    openMenu(){
      this.$store.commit('openMenu');
      const $this = this;
      this.$nextTick(() => {
        setTimeout(function(){
          easeScroll( 0.6 ).then(function () {
            $this.scrollTrigger = true;
          });
        },100);
      });
    },
    closeMenu(){
      const $this = this;
      easeScroll( 0 ).then(function () {
        $this.$store.commit('closeMenu');
        $this.scrollTrigger = false;
        $this.currentPage = 'top';
      });
    },
    touchEndInteraction(){
      const el = document.getElementById('navMenu__content');
      // スナップ系の処理 スクロールトリガーだとガタつく為に分離
      const scrollPosition = el.scrollTop / window.innerHeight;
      // Touch Event
      if( 1 > scrollPosition && scrollPosition >= 0.8 ){
        // 80-100%間で上部にFit
        easeScroll( 1 )
      }else if( 0.8 > scrollPosition && scrollPosition >= 0.4 ){
        // 40-79%間では60%に自動的に戻る(snapさせる)
        easeScroll( 0.6 );
      }else if( 0.4 > scrollPosition ){
        // 39%以下になったら自動的に消える
        this.closeMenu();
      }
    },
  },
  mounted() {
    this.$store.commit('closeMenu');
  },
  components: {
    iconMenu,
    iconLanguageJp,
    iconLanguageEn,
    iconClose,
    iconArrowBack,
    PageRecord,
    PageRestart,
    PageClear,
    PageShare,
    PageInformation,
  },
};
</script>


<style lang="scss" scoped>
.menu-enter-active, .menu-leave-active {
  transition: opacity .1s;
}
.menu-enter, .menu-leave-to {
  opacity: 0;
}

.navMenu{

  &__footer{
    width: 100vw;
    height: 64px;
    position: fixed;
    left: 0;
    bottom: 0;
    background: $COLOR_MAIN;
    button{
      position: absolute;
      background: 0;
      border: 0;
      top: 16px;
      opacity: .8;
      cursor: pointer;
      outline: none;
      &:hover,&:active{
        opacity: 1;
      }
    }
    button.menu{
      left: 16px;
    }
    button.lang{
      right: 16px;
    }
    .iconMenu,.iconLanguage{
      width: 32px;
      height: 32px;
      fill: #fff;
    }
  }

  .navMenu__footer-enter-active, .navMenu__footer-leave-active {
    transition: all .1s;
  }
  .navMenu__footer-enter, .navMenu__footer-leave-to{
    transform: translateY(64px);
  }

  &__content{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
    overscroll-behavior: contain;
    z-index: 902;
    &::-webkit-scrollbar{
      display:none;
    }
    .mask{
      width: 100%;
      height: 140vh;
      position: fixed;
      top: -20vh;
      background: rgba(#000,.2);
    }
    section{
      width: 100%;
      margin: 100vh auto 0;
      min-height: 100vh;
      background: #2c2323;
      color: #fff;
      position: relative;
      box-shadow: 0 -1px 24px rgba(#000,.1);
      @include min ($WIDTH_MOBILE){
        margin: 10vh auto;
        max-width: 640px;
        min-height: 80vh;
      }
      h2{
        width: 100%;
        height: 56px;
        line-height: 56px;
        text-align: center;
        top: 0;
        background: $COLOR_MAIN;
        color: #fff;
        @include max ($WIDTH_MOBILE){
          position: -webkit-sticky;
          position: sticky;
        }
        button{
          width: 32px;
          height: 32px;
          position: absolute;
          top: 12px;
          left: 12px;
          svg{
            fill: rgba(#fff,.8);
          }
        }
      }
      .menuList{
        margin: 16px 16px 0;
        color: rgba(#fff,.8);
        li{
          height: 56px;
          line-height: 56px;
          font-size: 16px;
          padding-left: 56px;
          background: rgba(#fff,.05);
          cursor: pointer;
          margin-top: 4px;
          border-radius: 2px;
          transition: .1s ease;
          position: relative;
          &.restrat{
            background: rgba($COLOR_THEME,.7);
          }
          &:hover,&:active{
            background: rgba(#fff,.1);
          }
          &::before{
            content: "";
            display: block;
            width: 24px;
            height: 24px;
            position: absolute;
            top: 16px;
            left: 16px;
            opacity: .4;
            background-size: 120px 24px;
            background-image:url('data:image/svg+xml,<svg enable-background="new 0 0 120 24" viewBox="0 0 120 24" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="m4 13c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm0 4c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm0-8c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm4 4h12c.6 0 1-.4 1-1s-.4-1-1-1h-12c-.6 0-1 .4-1 1s.4 1 1 1zm0 4h12c.6 0 1-.4 1-1s-.4-1-1-1h-12c-.6 0-1 .4-1 1s.4 1 1 1zm-1-9c0 .6.4 1 1 1h12c.6 0 1-.4 1-1s-.4-1-1-1h-12c-.6 0-1 .4-1 1zm-3 5c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm0 4c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm0-8c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm4 4h12c.6 0 1-.4 1-1s-.4-1-1-1h-12c-.6 0-1 .4-1 1s.4 1 1 1zm0 4h12c.6 0 1-.4 1-1s-.4-1-1-1h-12c-.6 0-1 .4-1 1s.4 1 1 1zm-1-9c0 .6.4 1 1 1h12c.6 0 1-.4 1-1s-.4-1-1-1h-12c-.6 0-1 .4-1 1z"/><path d="m36 6v1.8c0 .3.2.5.5.5.1 0 .3-.1.4-.2l2.8-2.8c.2-.2.2-.5 0-.7l-2.8-2.8c-.2-.2-.5-.2-.7 0-.1.2-.2.3-.2.4v1.8c-4.4 0-8 3.6-8 8 0 1 .2 2 .6 3 .2.5.8.8 1.3.6.1-.1.2-.1.3-.2.3-.3.3-.6.2-1-.3-.8-.4-1.6-.4-2.4 0-3.3 2.7-6 6-6zm5.8 2.7c-.3.3-.3.6-.2 1 1.3 3.1-.2 6.6-3.3 7.8-.7.3-1.5.5-2.3.5v-1.8c0-.3-.2-.5-.5-.5-.1 0-.3.1-.4.2l-2.8 2.8c-.2.2-.2.5 0 .7l2.8 2.8c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-1.9c4.4 0 8-3.6 8-8 0-1-.2-2-.6-2.9-.2-.5-.8-.8-1.3-.6 0 0-.1.1-.2.2z"/><path d="m61.3 20.1c-.8.7-1.9.7-2.7 0l-.1-.1c-5.2-4.8-8.7-7.9-8.5-11.8.1-1.6.9-3.2 2.3-4.2 2.5-1.6 5.8-1.2 7.7 1.1 1.9-2.3 5.2-2.7 7.7-1.1 1.4 1 2.3 2.6 2.3 4.3.1 3.9-3.3 7-8.5 11.8z"/><path d="m84 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 15c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1v4c0 .6-.4 1-1 1zm1-8h-2v-2h2z"/><path d="m102 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-12h-12zm13-15h-3.5l-1-1h-5l-1 1h-3.5v2h14z"/></g></svg>');
          }
          &.restrat::before{ background-position: -24px 0; }
          &.record::before{ background-position: 0 0; }
          &.share::before{ background-position: -48px 0; }
          &.clear::before{ background-position: -96px 0; }
          &.information::before{ background-position: -72px 0; }
        }
      }
    }
  }
}

.menuContent{
  padding: 24px 16px;
  @include min ($WIDTH_MOBILE){
    padding: 32px 32px;
    text-align: center;
  }
}
</style>
