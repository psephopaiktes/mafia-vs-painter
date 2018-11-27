<template>
  <div class="init">
    <!-- <h1>{{ state.en ? 'Player Setting' : 'プレイヤーの設定' }}</h1> -->
    <!-- <p>{{ state.en ? 'TOEN' : 'ゲームに参加するプレイヤーの名前を入力してください。4人から8人まで参加可能です。' }}</p> -->
    <ul class="form">
      <li v-for="(item,i) in state.player" :key="i" class="form__input">
        <input type="text" :value="item" @change="updateItem(i,$event.target.value)">
        <button @click="state.player.splice(i,1)" v-if="i > 3"><i class="material-icons">remove_circle</i></button>
      </li>
    </ul>
    <button @click="addItem" v-if="state.player.length < 8" class="form__addButton"><i class="material-icons">add</i></button>
    <router-link to="/play">{{ state.en ? 'OK' : '次へ' }}</router-link>
    <!-- <navController>
      <ButtonPrimary link="">OK</ButtonPrimary>
    </navController> -->
    <!-- <navContent /> -->
  </div>
</template>

<script>
export default {
  name: 'init',
  props: ["state"],
  methods: {
    addItem: function() {
      this.state.player.push('');
    },
    updateItem: function(i,val) {
      this.state.player[i] = val;
      //TODO: ERROR 同じ名前・絵文字や記号の使用など
    }
  },
  mounted: function() {
    // if( this.state.player < 1 ){
    //   this.state.player = ['a','b','c','d','e'];
    // }
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
    font-size: 32px;
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
