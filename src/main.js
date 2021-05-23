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
import Toasted from 'vue-toasted';
import NProgress from 'nprogress'
import titleMixin from './mixins/titleMixin'


require('dotenv').config()


let socketConnection = SocketIO('http://localhost:8000/', {
    transports: ['websocket'],
    path: '/socketio/socket.io',
    withCredentials: false,
})


Vue.config.productionTip = false


Vue.use(VueSocketIOExt, socketConnection, {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
})
Vue.use(Toasted, {
    position: 'bottom-center',
    fullWidth: true,
    duration: 10000,
    keepOnHover: true,
    action: {
        text: 'Закрыть',
        onClick: (e, toastObject) => {
            toastObject.goAway(0);
        }
    },
})

const token = localStorage.getItem('user-token')
if (token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

axios.defaults.baseURL = 'http://localhost:8000/'
axios.defaults.withCredentials = false

axios.interceptors.request.use((conf) => {
    NProgress.start();
    return conf
})
axios.interceptors.response.use((conf) => {
    NProgress.done()
    return conf
})

Vue.prototype.$axios = axios
Vue.mixin(titleMixin)
Vue.use(vmodal);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
