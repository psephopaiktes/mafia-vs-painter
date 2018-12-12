<template>
  <div class="home">
    <!-- <h1><img src="/assets/logo.png" alt="Mafia Vs. Painter"></h1> -->

    <router-link to="/init">{{ $store.state.en ? 'START' : 'スタート' }}</router-link>
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


<style lang="scss" scoped>
/* .fade-enter-active, .fade-leave-active{
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
} */
</style>
