/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


// import Vue from 'vue'
// import App from './App.vue'

// i18n
// import i18n from './i18n/i18n'

import LoginButton from "./components/LoginButton.vue";

/* new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
 */

export default {
    install(Vue, options) {
        // Let's register our component globally
        // https://vuejs.org/v2/guide/components-registration.html
        Vue.component("login-button", LoginButton);
    }
};