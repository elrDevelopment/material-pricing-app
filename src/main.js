import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDollarSign, faEdit, faTags, faTrashAlt } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrashAlt, faDollarSign, faTags, faEdit)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
