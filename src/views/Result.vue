<template><transition name="page"><div class="container">

  <h1 class="headline">{{ $store.state.en ? 'Result' : '結果' }}</h1>

  <div class="winner" v-if="$store.state.winner=='mafia'">
    <img src="https://via.placeholder.com/400x300">
    <p>{{ $store.state.en ? 'Mafia won.' : 'マフィアが勝利しました。' }}</p>
  </div>

  <div class="winner" v-else-if="$store.state.winner=='painter'">
    <img src="https://via.placeholder.com/400x300">
    <p>{{ $store.state.en ? 'Painters won.' : '絵描きが勝利しました。' }}</p>
  </div>

  <div class="winner" v-else>
    <p>ERROR</p>
  </div>

  <!-- ここに作成画像エリア -->

  <table>
    <tr>
      <th>{{ $store.state.en ? 'category' : 'お題のカテゴリ' }}</th>
      <td>{{ $store.state.category }}</td>
    </tr>
    <tr>
      <th>{{ $store.state.en ? 'theme' : 'お題' }}</th>
      <td>{{ $store.state.theme }}</td>
    </tr>
    <tr>
      <th>{{ $store.state.en ? 'mafia' : 'マフィア' }}</th>
      <td>{{ $store.state.mafia }}</td>
    </tr>
  </table>


  <div class="bottomButtons fade">
    <router-link to="/init" class="button primary">{{ $store.state.en ? 'REPLAY' : 'もう一度遊ぶ' }}</router-link>
    <router-link to="/" class="button secondary">{{ $store.state.en ? 'HOME' : 'トップへ' }}</router-link>
  </div>

</div></transition></template>

<script>
export default {
  name: 'drawPaper',
  methods: {
  },
};
</script>


<style lang="scss" scoped>
.winner{
  margin-top: 24px;
  img{
    display: block;
    width: 100%;
  }
  p{
    text-align: center;
    margin-top: 8px;
  }
}
table{
  margin: 32px auto 0;
  table-layout: fixed;
  width: 90%;
  max-width: 480px;
  border-collapse: collapse;
  border: 2px solid rgba($COLOR_MAIN,.6);
  border-width: 2px 0;
  tr{
    border: 1px solid rgba($COLOR_MAIN,.4);
    border-width: 1px 0;
  }
  th{
    text-align: right;
  }
  th,td{
    padding: 8px 4px;
  }
}
</style>
