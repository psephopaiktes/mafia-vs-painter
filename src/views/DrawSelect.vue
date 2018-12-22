<template>
  <div class="drawSelect container">
    <!-- <h1>{{ $store.state.en ? 'Selection' : '選択' }}</h1> -->
    <!-- <p>{{ $store.state.en ? 'TOEN' : '全員がお題を確認できました。' }}</p> -->
    <!-- <p>{{ $store.state.en ? 'TOEN' : '順番に絵を描いていきます。どちらの方法で絵を描きますか ?' }}</p> -->
    <label>
      <input type="radio" name="media" value="device" v-model="media">
      このデバイスに直接描く
    </label>
    <label>
      <input type="radio" name="media" value="paper" v-model="media">
      紙とペンで描く
    </label>
    <router-link :to="'/draw/'+media">{{ $store.state.en ? 'START' : '開始' }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'drawSelect',
  data() {
    return {
      media: 'device',
    };
  },
  methods: {
  },
};
</script>


<style lang="scss" scoped>
</style>
