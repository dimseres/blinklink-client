import axios from "axios";
import qs from 'qs';

export default {
    namespaced: true,
    state: {
        groupCover: "",
        linkInfo: null,
    },
    mutations: {
        setGroupCover(state, payload) {
            state.groupCover = payload
        },
        setLinkInfo(state, payload) {
            state.linkInfo = payload
        }
    },
    getters: {
       getGroupCover: state => state.groupCover,
       getLinkInfo: state => state.linkInfo,
    },
    actions: {
       
    },
}
