<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 controls text-end">
        <a href="" class="close__modal" @click.prevent="closeModal">X</a>
      </div>
      <div class="col-12">
        <h5>Добавить ссылку</h5>
      </div>
      <div class="form-group">
        <label for="url"><sup>*</sup>URL:</label>
        <input class="form-control" v-model="url" type="text" name="" id="url">
      </div>
      <!-- <div class="form-group">
        <label for="url">Описание:</label>
        <textarea class="form-control" v-model="description" type="text" name="" id="url"></textarea>
      </div> -->
      <div class="сol-12 text-center mt-3">
        <button class="btn btn-create" @click.prevent="addLink">Добавить</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "AddLink",
  data() {
    return {
      url: null,
      description: null
    }
  },
  methods: {
    ...mapActions({updateUserLinks: 'user/updateUserLinks'}),
    closeModal() {
      this.$modal.hide('AddLink')
    },
    addLink() {
      this.$axios.post('/api/link/add', {
        url: this.url,
      }).then(response => {
        this.updateUserLinks(response.data)
        this.closeModal()
      }).catch(reject => {
        this.$toasted.show(reject)
      })
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
sup {
  color: red;
}
.btn-create {
  background: #3B2565;
  color: #fff;
  border: 1px solid #3B2565;
  border-radius: 20px;
  padding: 7px 35px;
  &:hover {
    background: #fff;
    color: #3B2565;
    border: 1px solid #3B2565;
  }
}
</style>