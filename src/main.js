import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    };
    window.addEventListener('scroll', f);
  },
});
Vue.directive('touchend', {
  bind: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('touchend', f)
      }
    };
    window.addEventListener('touchend', f);
  },
});

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
