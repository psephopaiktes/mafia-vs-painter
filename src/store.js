import Vue from 'vue'
import Vuex from 'vuex'
import THEME from './const/theme';

Vue.use(Vuex)

const randomSelect = array => array[Math.floor(Math.random() * array.length)];

export default new Vuex.Store({
  state: {
    en: true,
    player: ['', '', '', ''],
    mafia: '',
    category: '',
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
    shufflePlayer (state) {
      for(let i = state.player.length - 1; i >= 0; i--){
        const rand = Math.floor( Math.random() * ( i + 1 ) );
        [state.player[i], state.player[rand]] = [state.player[rand], state.player[i]]
      }
    },
    selectCategoryTheme (state) {
      state.category = randomSelect(Object.keys(THEME.JP));
      state.theme = randomSelect(THEME.JP[state.category]);
    },
    selectMafia (state) {
      state.mafia = randomSelect(state.player);
    }
  },
  actions: {},
})
