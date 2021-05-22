import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import vmodal from 'vue-js-modal'
// import VueSocketIO from 'vue-socket.io'
import VueSocketIOExt from 'vue-socket.io-extended'
import SocketIO from 'socket.io-client'

require('dotenv').config()


let socketConnection = SocketIO('http://localhost:8000/', {
    transports: ['websocket'],
    path: '/socketio/socket.io',
    withCredentials: false,
})


Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.use(VueSocketIOExt, socketConnection, {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
})
// Vue.use(VueSocketIOExt({
//     debug: true,
//     connection: socketConnection,
//     vuex: {
//         store,
//         actionPrefix: 'SOCKET_',
//         mutationPrefix: 'SOCKET_'
//     }
// }))

axios.defaults.baseURL = 'http://localhost:8000/'
axios.defaults.withCredentials = false

Vue.use(vmodal);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
