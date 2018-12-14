<template>
  <nav class="navMenu">
    <footer class="navMenu__footer" v-show="!open">
      <button @click="openMenu"><i class="material-icons">menu</i></button>
      <button @click="$store.commit('changeLang')"><i class="material-icons">language</i></button>
    </footer>
    <!-- ↓ここのsectionをルーティング? -->
    <!-- ↓そんなタブみたいなことできるかは調査-->
    <!-- ↓動きだけここで定義? -->
    <div id="navMenu__content" class="navMenu__content" v-show="open" @scroll="scrollInteraction($event.target)">
      <div class="mask" @click.prevent.stop="closeMenu"></div>
      <section>
        <h2>
          <button @click="closeMenu"><i class="material-icons">close</i></button>
          MENU
        </h2>
        <ul>
          <li>aaa</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li><li>bbb</li>
        </ul>
      </section>
    </div>
  </nav>
</template>


<script>
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
      open: false,
      scrollTrigger: false,
    };
  },
  methods: {
    openMenu(){
      this.open = true;
      const $this = this;
      this.$nextTick(() => {
        easeScroll( 0.6 ).then(function () {
          $this.scrollTrigger = true;
        });
      });
    },
    closeMenu(){
      const $this = this;
      easeScroll( 0 ).then(function () {
        $this.open = false;
        $this.scrollTrigger = false;
      });
    },
    scrollInteraction(el){
      // トリガー条件を「スクロールして離したら」に変える
      // ただしはばいっぱいのとこはそのまま
      if(!this.scrollTrigger){ return; }
      const scrollPostion = el.scrollTop / window.innerHeight;
      if( scrollPostion > 0.6 ){
        // 61-100%間でだんだん幅100%に変更(もしくはZ位置?)
      }else if( scrollPostion > 0.4 ){
        // 41-60%間では60%に自動的に戻る(snapさせる)
        easeScroll( 0.6 );
      }else{
        // 40%以下になったら自動的に消える
        this.closeMenu();
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.navMenu{
  &__footer{
    width: 100vw;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #000;
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
    &::-webkit-scrollbar{
      display:none;
    }
    .mask{
      width: 100%;
      height: 100%;
      position: fixed;
      background: rgba(#000,.4);
    }
    section{
      width: calc(100% - 32px);
      margin: 100vh auto 0;
      min-height: 100vh;
      background: #fff;
      position: relative;
      h2{
        width: 100%;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        background: #000;
        color: #fff;
      }
    }
  }
}
</style>
