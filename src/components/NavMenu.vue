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
      @scroll="scrollInteraction($event.target)"
      @touchend="touchEndInteraction($event.target)" >
      <div class="mask" @click.prevent.stop="closeMenu"></div>
      <section id="navMenu__menu" class="navMenu__menu"><transition name="menu" mode="out-in">

        <div v-if="currentPage == 'top'" key="top">
          <h2>
            <button @click="closeMenu"><iconClose /></button>
            MENU
          </h2>
          <ul class="menuList">
            <li @click="currentPage = 'restart'" v-if="$route.path != '/'">{{ $store.state.en ? 'Restart' : 'やりなおす' }}</li>
            <li @click="currentPage = 'record'">{{ $store.state.en ? 'Record' : '戦績' }}</li>
            <li @click="currentPage = 'share'">{{ $store.state.en ? 'Share' : 'シェアする' }}</li>
            <li @click="currentPage = 'clear'">{{ $store.state.en ? 'Data Clear' : 'データ消去' }}</li>
            <li @click="currentPage = 'information'">{{ $store.state.en ? 'Information' : 'このゲームについて' }}</li>
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
    scrollInteraction(el){
      if(!this.scrollTrigger){ return; }
      // Scroll Event
      const scrollPosition = el.scrollTop / window.innerHeight;
      // if( 1 >= scrollPosition && scrollPosition >= 0.6 ){
      //   // 60-100%間でだんだん幅100%に変更
      //   const menuWidth = 90 + ( scrollPosition - 0.6 ) / 0.4 * 10;
      //   document.getElementById('navMenu__menu').style.width = menuWidth+'%';
      //   ;
      // }else
      //  TODO PC時のデザイン次第では↓の処理もタッチのブロックに移したほうがよい
      if( 0.4 > scrollPosition ){
        // 39%以下になったら自動的に消える
        this.closeMenu();
      }
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
        easeScroll( 0.6 )
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
      h2{
        width: 100%;
        height: 56px;
        line-height: 56px;
        text-align: center;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        background: $COLOR_MAIN;
        color: #fff;
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
        color: rgba(#fff,.9);
        li{
          padding: 12px 16px;
          background: rgba(#fff,.05);
          cursor: pointer;
          margin-top: 8px;
          border-radius: 2px;
          transition: .1s ease;
          &:hover,&:active{
            background: rgba(#fff,.1);
          }
        }
      }
    }
  }
}

.menuContent{
  padding: 24px 16px;
}
</style>
