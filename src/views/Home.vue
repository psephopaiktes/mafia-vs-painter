<template>
  <div class="home">
    <h1><img src="/assets/logo.png" alt="Mafia Vs. Painter"></h1>
    <router-link to="/init">{{ $store.state.en ? 'START' : 'スタート' }}</router-link><br/>
    <button @click="$store.commit('changeLang')">change</button>
    <!-- <navController>
      <ButtonPrimary link="">START</ButtonPrimary>
    </navController> -->
    <!-- <navContent /> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
};
</script>
