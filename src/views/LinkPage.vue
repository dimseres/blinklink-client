<template>
  <div class="link__page">
    <NavBar/>
    <LinkDescription class="position-relative" :data="linkInfo" :qrcode="apiData.data.qrcode" :apiData="apiData"/>

  </div>
</template>

<script>
import LinkDescription from "@/components/LinkDescription";
import NavBar from "@/components/NavBar";

export default {
  name: "LinkPage",
  data() {
    return {
      apiData: null,
      linkInfo: null,
    }
  },
  components: {
    NavBar,
    LinkDescription
  },
  async created() {
    // screen_name: "apiclub"
    // Bap4GMvyUvWKB6uTrhAdYG
    console.log(process.env)
    this.apiData = await this.$axios.get(`/api/link/${this.$route.params.uuid}`)
    console.log("FIRST DATA", this.apiData)
    const socket = new WebSocket(`ws://localhost:8000/ws/link/${this.apiData.data.group_id}`)
    socket.onmessage = (message => {
      this.linkInfo = JSON.parse(message.data)
      console.log(this.linkInfo)
      // console.log(message)
    })
  }
}
</script>

<style lang="scss" scoped>
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