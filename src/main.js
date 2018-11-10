import Vue from 'vue'
import App from './App.vue'

import VueThinModal from 'vue-thin-modal'
import 'vue-thin-modal/dist/vue-thin-modal.css'

Vue.config.productionTip = false

Vue.use(VueThinModal)

new Vue({
  render: h => h(App)
}).$mount('#app')
