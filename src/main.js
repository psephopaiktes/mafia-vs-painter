import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import THEME from './const/theme';

Vue.config.productionTip = false

// Global Instance: お題のリストを保存
Vue.prototype.$THEME = THEME;

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')


window.console.log(
  '%c 🕶 Mafia vs Painter 👩‍🎨%c\nhttps://github.com/psephopaiktes/mafia-vs-painter',
  `
    background: #B20;
    padding: 20px 40px;
    letter-spacing: .5em;
    color: #fff;
    font-size: large;
    font-weight: bold;
    text-align: center;
  `,
  `
    padding: 20px 0 40px;
  `,
);
