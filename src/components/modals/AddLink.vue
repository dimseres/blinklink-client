<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 controls text-end">
        <a href="" class="close__modal" @click.prevent="closeModal">X</a>
      </div>
      <div class="col-12">
        <h5>Добавить ссылку</h5>
      </div>
      <div class="сol-12">
        <button>создать</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddLink",
  methods: {
    closeModal() {
      this.$modal.hide('AddLink')
    }
  },
}
</script>

<style scoped lang="scss">
.close__modal {
  text-decoration: none;
  font-weight: 900;
  color: #404040;
}
</style>