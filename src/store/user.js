import axios from "axios";
import qs from 'qs';

export default {
    namespaced: true,
    state: {
        userInfo: null
    },
    mutations: {
        setUserInfo(state, payload) {
            state.userInfo = payload
        }
    },
    getters: {
        getUserInfo(state) {
            return state.userInfo
        }
    },
    actions: {
        async userLogin({commit}, payload) {
            try {
                const data = await axios.post('/auth/jwt/login', qs.stringify({
                    username: payload.login,
                    password: payload.password
                }), {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                    }
                })
                commit('setUserInfo', data.data)
            } catch (e) {
                alert(e)
            }
        },
        async userRegister({commit}, payload) {
            try {
                const data = await axios.post('/auth/register',{
                    email: payload.email,
                    password: payload.password
                })
                commit('setUserInfo', data.data)
            } catch (e) {
                alert(e)
            }
        }
    },
}
