<template>
  <div class="link__page">
    <NavBar :groupCover="true"/>
    <transition name="fade">
        <router-view />
    <!-- <LinkDescription class="position-relative" :data="linkInfo" :qrcode="apiData.qrcode" :apiData="apiData"/> -->
    </transition>
  </div>
</template>

<script>
// import LinkDescription from "@/components/LinkDescription";
import NavBar from "@/components/NavBar";
import { mapGetters } from 'vuex';

export default {
  name: "MainLayout",
  data() {
    return {
      apiData: {},
      // linkInfo: null,
      updateDataTimer: null
    }
  },
  components: {
    NavBar,
    // LinkDescription
  },
  computed: {
    ...mapGetters({linkInfo: 'link/getLinkInfo'}),
    coverImage() {
      if (this.linkInfo && this.linkInfo.cover) {
        return this.linkInfo.cover.images[4].url
      }
      return ""
    },
  },
  sockets: {
    connect() {
      console.log('socket to notification channel connected')
    },
    connectHand() {
      console.log('that is emit from server')
    },
    watch_link_data(data){
      console.log(data)
      this.$store.commit('link/setLinkInfo', data)
      // this.linkInfo = data
    }
  },
  methods: {
    async fetchLinkData() {
      this.linkInfo = await this.$socket.client.emit('link_watch', this.apiData)
    }
  },
  destroyed() {
    this.$socket.client.disconnect()
  },
  async created() {
    // screen_name: "apiclub"
    // Bap4GMvyUvWKB6uTrhAdYG
    // console.log(process.env)
    this.$socket.client.connect()
    await this.$axios.get(`/api/link/${this.$route.params.uuid}`).then(response => {
      this.apiData = response.data
      this.$socket.client.emit('link_watch', this.apiData)
    })
    console.log(this.apiData)
  
    // console.log("FIRST DATA", this.apiData)
    // const socket = new WebSocket(`ws://localhost:8000/ws/link/${this.apiData.data.group_id}`)
    // socket.onmessage = (message => {
    //   this.linkInfo = JSON.parse(message.data)
    //   console.log(this.linkInfo)
    //   // console.log(message)
    // })
  }
}
</script>

<style lang="scss" scoped>
// .fade-enter-active, .fade-leave-active {
//   transition: opacity .5s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
//   opacity: 0;
// }

.logo {
  margin-bottom: 0;
}

.content {
  position: relative;
  width: 1270px;
  margin: auto;
  padding: 20px 0px;
}



.control {
  position: absolute;
  bottom: -30px;
  left: 0px;
  img {
    height: 20px;
    transform: rotate(180deg);
    padding-left: 10px;
  }
}

.link__page {
  position: relative;
  width: 100%;
}

.control__link {
  text-decoration: none;
  color: #000;
}

.add__link {
  display: block;
  width: 20px;
  height: 20px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 21px;
    height: 4px;
    top: 50%;
    transform: translateY(calc(50% - 3px));
    background: #404040;
    border-radius: 20px;
  }

  &::before {
    content: "";
    position: absolute;
    transform: translateX(calc(50% - 3px));
    top: 0px;
    left: 50%;
    width: 4px;
    height: 21px;
    background: #404040;
    border-radius: 20px;
  }
}
</style>