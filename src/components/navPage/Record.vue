<template><div class="menuContent">
  <p>
    {{ $store.state.en ? 'You can check the record of the game played within 24 hours.' : 'これまで24時間以内にプレイしたゲーム記録が確認できます。' }}
    <span v-if="$store.state.record.length">{{ $store.state.en ? '\'M\' is Mafia, \'P\' is Painter,and red letter is the winner.' : 'Mがマフィア(mafia)、Pが絵描き(painter)を表し、赤文字が勝者です。' }}</span>
    <span v-else>{{ $store.state.en ? 'There is no game record.' : 'まだゲームの記録がありません。' }}</span>
  </p>

  <div v-if="$store.state.record.length" class="scrollContainer"><table>

    <tr>
      <th></th>
      <th v-for="(name,i) in allPlayer" :key="i"><span>{{ name }}</span></th>
    </tr>

    <tr v-for="(record,i) in $store.state.record" :key="i">
      <th>{{formatTime(record.time)}}</th>

      <td v-for="(name,j) in allPlayer" :key="j">
        <span v-if="record.mafia == name" :class="{ win: (record.winner=='mafia') }">M</span>
        <span v-else-if="record.player.find(item => item == name)" :class="{ win: (record.winner!='mafia') }">P</span>
        <span v-else>-</span>
      </td>

    </tr>

  </table></div>

</div></template>


<script>
export default {
  name: 'PageRecord',
  data() {
    return {
    };
  },
  computed: {
    allPlayer() {
      let tmp = [];
      for( let i=0; i<this.$store.state.record.length; i++){
        tmp = [...tmp, ...this.$store.state.record[i].player];
      }
      tmp = new Set(tmp);
      tmp = [...tmp].sort();
      return tmp;
    },
  },
  methods: {
    formatTime(time){
      const displayFormat = { hour: '2-digit', minute: '2-digit' };
      return Intl.DateTimeFormat('ja-JP', displayFormat).format( new Date(time) ) ;
    },
  },
  mounted() {
    // 24時間以前のデータを消す
    this.$store.commit('delOldRecord');
  },
}
</script>


<style lang="scss" scoped>
.scrollContainer{
  max-width: 100%;
  overflow: scroll;
}
table{
  margin: 48px auto 0;
  table-layout: fixed;
  /* max-width: 100%; */
  border-collapse: collapse;
  tr{
    transition: .2s ease;
    &:first-child{
      border-bottom: 2px solid #686262;
    }
    &:hover,&:active{
      background: rgba(#000,.2);
    }
  }
  th,td{
    border: 1px solid #686262;
    border-width: 0 1px;
    text-align: center;
  }
  th{
    font-size: 14px;
    font-weight: 400;
    white-space:nowrap;
    width: 40px;
    padding: 8px 0;
    line-height: 40px;
    vertical-align: bottom;
    span{
      writing-mode: vertical-rl;
    }
    &:first-child{
      padding: 0 8px;
      border: none;
      font-size: 10px;
      color: rgba(#fff,.5);
      text-align: right;
    }
  }
  td{
    font-size: 20px;
    padding: 6px;
    span{
      color: rgba(#fff,.4);
      font-weight: 100;
    }
    span.win{
      color: $COLOR_THEME;
      font-weight: 700;
    }
  }
}
</style>
