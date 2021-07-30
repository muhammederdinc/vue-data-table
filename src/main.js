import Vue from 'vue';
import App from './App.vue';
import store from './store';
import main from './assets/styles/main.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  main,
  render: (h) => h(App),
}).$mount('#app');
