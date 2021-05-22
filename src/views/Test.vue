<template>
  <div>
    tgyhujikol
    <button @click="emitAction">dawda</button>
    <button @click="goBack">push back</button>
  </div>
</template>

<script>
export default {
  name: "Test.vue",
  sockets: {
    connect() {
      console.log('socket to notification channel connected')
    },
    connectHand() {
      console.log('that is emit from server')
    }
  },
  methods: {
    emitAction() {
      this.$socket.client.emit('hello_dimas')
    },
    goBack() {
      this.$router.push('/')
    }
  },
  destroyed() {
    this.$socket.client.disconnect()
    alert('destroyed')
  }
}
</script>

<style scoped>

</style>