import Vue from 'vue'
import Vuex from 'vuex'
import THEME from './const/theme';

Vue.use(Vuex)

const randomSelect = array => array[Math.floor(Math.random() * array.length)];

export default new Vuex.Store({
  state: {
    en: true,
    menuOpen: false,
    player: ['', '', ''],
    mafia: '',
    category: '',
    theme: '',
    record: [
      {},
      // どう表示するかは要検討 理想はマージされた表だが、表がでかくなりすぎるとか処理だるいなら、都度の回の結果だけでもいいかも
      // { 'ジョン':true, 'デビット':false, '天海':false },
      // { 'ジョン':true, 'デビット':false, 'マックス':true },
    ],
  },
  mutations: {
    changeLang (state) {
      state.en = !state.en;
    },
    openMenu (state) {
      state.menuOpen = true;
    },
    closeMenu (state) {
      state.menuOpen = false;
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
    },
    // recordResult (state, winner) {
    //   if(winner == mafia){}
    //   else(winner == painter){}
    // },
  },
  actions: {},
})
