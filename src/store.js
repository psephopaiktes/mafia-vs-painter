import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    en: true,
    player: ['', '', '', ''],
    category: 'ああ',
    theme: '',
    record: [{}],
  },
  mutations: {
    changeLang (state) {
      state.en = !state.en;
    },
    addPlayer (state) {
      state.player.push('');
    },
    removePlayer (state, i) {
      state.player.splice(i,1);
    },
    updatePlayer (state, payload) {
      state.player[payload.i] = payload.val;
    },
  },
  actions: {},
})
