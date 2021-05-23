import axios from "axios";
import qs from 'qs';

export default {
    namespaced: true,
    state: {
        userInfo: null,
        token: localStorage.getItem('user-token') || null,
        userLinks: null,
    },
    mutations: {
        setUserInfo(state, payload) {
            state.userInfo = payload
        },
        setToken(state, payload) {
            localStorage.setItem('user-token', payload)
            state.token = payload
        },
        setUserLinks(state, payload) {
            state.userLinks = payload
        }
    },
    getters: {
        getUserInfo(state) {
            return state.userInfo
        },
        isAuthenticated: state => !!state.token,
        getUserLinks(state) {
            return state.userLinks
        }
    },
    actions: {
        userLogin({ commit, dispatch }, payload) {
            return new Promise((resolve, reject) => {
                axios.post('/auth/jwt/login', qs.stringify({
                    username: payload.login,
                    password: payload.password
                }), {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                    }
                }).then(response => {
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token
                    commit('setUserInfo', response.data.access_token)
                    commit('setToken', response.data.access_token)
                    resolve(response)
                }).catch(err => {
                    localStorage.removeItem('user-token')
                    delete axios.defaults.headers.common['Authorization']
                    reject(err)
                })
            })
        },
        async userRegister({ commit }, payload) {
            try {
                const data = await axios.post('/auth/register', {
                    email: payload.email,
                    password: payload.password
                })
                commit('setUserInfo', data.data)
            } catch (e) {
                throw new Error(e)
            }
        },
        fetchUserLinks({ commit }) {
            return new Promise ((resolve, reject) => {
                axios.get('/api/link/all').then(res => {
                    commit('setUserLinks', res.data)
                    resolve(res.data)
                }).catch(err => reject(err))
            })
        }
    },
}
