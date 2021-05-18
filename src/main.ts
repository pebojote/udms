import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import router from './router/index';

library.add(faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub, faCopyright)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({render: h => h(App), router: router }).$mount('#app')
