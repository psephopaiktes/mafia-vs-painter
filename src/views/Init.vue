<template>
  <div class="init container">
    <!-- <h1>{{ $store.state.en ? 'Player Setting' : 'プレイヤーの設定' }}</h1> -->
    <!-- <p>{{ $store.state.en ? 'TOEN' : 'ゲームに参加するプレイヤーの名前を入力してください。4人から8人まで参加可能です。順番はシャッフルされます。' }}</p> -->
    <form><ul class="form">
      <li v-for="(item,i) in $store.state.player" :key="i" class="form__input">
        <input type="text" :value="item" @input="updatePlayer(i,$event.target.value)" @focus="$event.target.select()">
        <p v-show="errors[i]" class="form__error"><i class="material-icons">error</i> {{errors[i]}}</p>
        <button @click="$store.commit('removePlayer',i)" v-if="i > 3">
          <i class="material-icons">remove_circle</i>
        </button>
      </li>
    </ul></form>

    <!-- <input type="text" @change="action($event.target.value)"> -->
    <button @click="$store.commit('addPlayer')" v-if="$store.state.player.length < 8" class="form__addButton">
      <i class="material-icons">add</i>
    </button>
    <router-link to="/theme">{{ $store.state.en ? 'OK' : '次へ' }}</router-link>
    <!-- <navController>
      <ButtonPrimary link="">OK</ButtonPrimary>
    </navController> -->
    <!-- <navContent /> -->
  </div>
</template>

<script>
export default {
  name: 'init',
  data() {
    return {
      errors: ['','','','','','','','',],
    };
  },
  methods: {
    updatePlayer(i, val) {

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

      this.$store.commit('updatePlayer',{i:i,val:val});
    },
  },
  mounted() {
    document.querySelector('.form input').focus();
  },
};
</script>


<style lang="scss" scoped>
$FORM_HEIGHT: 44px;
.form{
  &__input,&__addButton{
    margin-top: 16px;
    height: $FORM_HEIGHT;
    line-height: $FORM_HEIGHT;
    border: 2px solid $COLOR_MAIN;
    background: rgba(#fff,.4);
    border-radius: #{$FORM_HEIGHT/2};
  }
  &__input{
    position: relative;
    input{
      height: 100%;
      display: block;
      border: 0;
      width: 100%;
      padding: 0 #{$FORM_HEIGHT/2};
      background: none;
      font-size: 16px;
    }
    button{
      display: block;
      width: #{$FORM_HEIGHT - 4};
      height: #{$FORM_HEIGHT - 4};
      border: 0;
      background: none;
      position: absolute;
      top: 0;
      right: 0;
      color: $COLOR_THEME;
    }
  }
  &__addButton{
    width: 100%;
    border-style: dashed;
    background: none;
  }
}
</style>
