import Vue from 'vue'
// import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'
// import VueCookie from 'vue-cookie'

import App from './App'
import router from './router'
// import store from './store'

// import 'vue-material-design-icons/styles.css'
// import 'mdi/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

// Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(Vuetify)
// Vue.use(VueCookie)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
