<template>
  <div class="row">
    <h3 class="title">Ваши ссылки</h3>
    <div class="col-2 mt-3">
      <div class="box">
        <a href="" class="add_link" @click.prevent="addLink">добавить</a>
      </div>
    </div>
  </div>
</template>

<script>
import AddLink from "./modals/AddLink";

export default {
  name: "UserLinks",
  methods: {
    addLink() {
      this.$modal.show(AddLink, {}, {name: 'AddLink'})
    }
  }
}
</script>

<style scoped lang="scss">
.box {
  display: block;
  background: #fff;
  width: 100%;
  height: 160px;
  border-radius: 20px;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
}
.title {
  font-weight: 300;
}
.add_link{
  display: block;
  height: 100%;
  width: 100%;
  line-height: 160px;
  text-align: center;
  text-decoration: none;
  color: #F0641B;
}
</style>