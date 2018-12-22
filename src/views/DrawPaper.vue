<template>
  <div class="drawPaper">
    <!-- <h1>{{ $store.state.en ? 'TOEN' : 'お絵かき中' }}</h1> -->
    <!-- <p>{{ $store.state.en ? 'TOEN' : '紙とペンに、以下の順で一筆ずつ絵を描いてください。2巡したら終了です。' }}</p> -->
    <ol>
      <li v-for="(item,i) in $store.state.player" :key="i">{{ item }}</li>
    </ol>
    <!-- <p>{{ $store.state.en ? 'TOEN' : 'マフィアは正体がバレないように絵を描き、お題がなんなのか推測します。' }}</p> -->
    <!-- <p>{{ $store.state.en ? 'TOEN' : '絵描きはマフィアにバレないように、お題を知っている人だけがわかるような絵を描きます。誰がマフィアなのか推測します。' }}</p> -->
    <router-link to="/draw/complete">{{ $store.state.en ? 'FINISH' : '完了' }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'drawPaper',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>


<style lang="scss" scoped>
</style>
