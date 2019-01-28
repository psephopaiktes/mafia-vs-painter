<template><transition name="page"><div class="init container">

  <h1 class="headline">{{ $store.state.en ? 'Player Setting' : 'プレイヤーの設定' }}</h1>

  <form>
    <ul class="form">
      <transition-group name="list" tag="p"><li v-for="(item,i) in $store.state.player" :key="i" class="form__input">
        <input type="text" :value="item" @input="validate(i,$event.target.value)" @focus="$event.target.select()" :class="{ error: errors[i] }">
        <p v-show="errors[i]" class="form__error"><iconError class="iconError" /> {{errors[i]}}</p>
        <button type="button" @click="$store.commit('removePlayer',i)" v-if="i > 3">
          <iconRemoveCircle class="iconRemoveCircle" />
        </button>
      </li></transition-group>
  </ul></form>


  <button @click="$store.commit('addPlayer')" v-if="$store.state.player.length < 8" class="form__addButton">
    <iconAdd class="iconAdd" />
  </button>

  <p class="infoCell">{{ $store.state.en ? 'TOEN' : 'ゲームに参加するプレイヤーの名前を入力してください。4人から8人まで参加可能です。順番はシャッフルされます。' }}</p>

  <div class="bottomButtons fade">
    <button @click="validateAll()" class="button primary" type="button">{{ $store.state.en ? 'OK' : '次へ' }}</button>
  </div>

</div></transition></template>

<script>
import iconAdd from '@/components/icon/add.vue';
import iconRemoveCircle from '@/components/icon/remove_circle.vue';
import iconError from '@/components/icon/error.vue';

export default {
  name: 'init',
  data() {
    return {
      errors: ['','','','','','','','',],
    };
  },
  methods: {
    validate(i, val) {

      let msg = '';
      if( !val ){
        msg = (this.$store.state.en) ? 'TOEN' : '入力してください';
      }else if( !/^[\w\u30a0-\u30ff\u3040-\u309f\u30e0-\u9fcf]+$/.test(val) ){
        msg = (this.$store.state.en) ? 'TOEN' : '使用できない文字が含まれています';
      }else if( /.{11,}/.test(val)){
        msg = (this.$store.state.en) ? 'TOEN' : '10文字以内で入力してください';
      }else{
        msg = '';
      }
      this.errors.splice(i, 1, msg);

      this.$store.commit('updatePlayer', {i:i,val:val});
    },
    validateAll() {
      let errors = [];
      for( let i=0; i<this.$store.state.player.length; i++){
        this.validate(i,document.querySelectorAll('.form input')[i].value);
        errors[i] = this.errors[i];
      }
      // 表示している数までのerror配列がすべて空なら遷移
      if( errors.every(i => i === '') ){
        this.$router.push('theme');
      }else{
        window.alert('入力に間違いがあります。');
      }
    },
  },
  mounted() {
    document.querySelector('.form input').focus();
  },
  components: {
    iconAdd,
    iconRemoveCircle,
    iconError,
  },
};
</script>


<style lang="scss" scoped>
.list-enter-active, .list-leave-active {
  transition: all .2s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateX(32px);
}
.list-list-move {
  transition: transform 1s;
}

$FORM_HEIGHT: 44px;
.form{
  margin-top: 32px;
  &__input{
    margin-top: 12px;
    position: relative;
    input{
      display: block;
      width: 100%;
      height: $FORM_HEIGHT;
      line-height: $FORM_HEIGHT;
      border: 2px solid rgba($COLOR_MAIN,8);
      background: rgba(#fff,.4);
      border-radius: #{$FORM_HEIGHT/2};
      padding: 0 #{$FORM_HEIGHT/2};
      box-shadow: none;
      font-size: 16px;
      outline: none;
      &.error{
        border-color: $COLOR_THEME;
      }
      &:focus{
        background: #fff;
      }
    }
    button{
      display: block;
      width: #{$FORM_HEIGHT - 8};
      height: #{$FORM_HEIGHT - 8};
      border: 0;
      background: none;
      position: absolute;
      top: 4px;
      right: 4px;
      svg{
        fill: $COLOR_THEME;
      }
    }
  }
  &__error{
    color: $COLOR_THEME;
    margin-top: 4px;
    font-size: 12px;
    font-weight: bold;
    line-height: 24px;
    position: relative;
    margin-left: #{$FORM_HEIGHT/2};
    padding-left: 20px;
    svg{
      position: absolute;
      top: 4px;
      left: 0;
      fill: $COLOR_THEME;
      width: 18px;
      height: 18px;
    }
  }
  &__addButton{
    display: block;
    margin-top: 12px;
    width: 100%;
    border: 2px dashed rgba($COLOR_MAIN,8);
    padding-top: 4px;
    height: $FORM_HEIGHT;
    line-height: $FORM_HEIGHT;
    border-radius: #{$FORM_HEIGHT/2};
    opacity: .8;
    svg{
      width: 32px;
      height: 32px;
      fill: $COLOR_MAIN;
    }
  }
}
</style>
