import Vue from 'vue'
import Vuex from 'vuex'
import THEME from './const/theme';

Vue.use(Vuex)

const randomSelect = array => array[Math.floor(Math.random() * array.length)];

export default new Vuex.Store({
  state: {
    en: true,
    menuOpen: false,
    player: ['', '', '',''],
    mafia: '',
    winner: '',
    category: '',
    selectedMedia: 'device',
    theme: '',
    record: [],
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
    selectMedia (state, canvas) {
      state.selectedMedia = canvas;
    },
    selectCategoryTheme (state) {
      state.category = randomSelect(Object.keys(THEME.JP));
      state.theme = randomSelect(THEME.JP[state.category]);
    },
    selectMafia (state) {
      state.mafia = randomSelect(state.player);
    },
    recordResult (state, winner) {
      state.winner = winner;

      let thisGameRecord = {
        time: new Date(),
        winner: state.winner,
        mafia: state.mafia,
        player: [...state.player.sort()],
      };

      state.record.unshift(thisGameRecord);
    },
    delOldRecord (state) {
      const nowTime = new Date();

      // 24時間以内の配列要素だけ抽出しなおす
      state.record = state.record.filter(item => {
        const itemTime = new Date(item.time);
        const diffHour = ( nowTime.getTime() - itemTime.getTime() ) /1000 /60 /60;
        return ( diffHour < 24);
      });

    },
  },
  actions: {},
})
