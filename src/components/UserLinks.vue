<template>
  <div class="row">
    <h3 class="title">Ваши ссылки</h3>
    <div class="col-12">
      <div class="row">
        <div class="col-2 mt-4">
          <div class="box">
            <a href="" class="add_link" @click.prevent="addLink">добавить</a>
          </div>
        </div>
        <div class="col-2 mt-4" v-for="item in getUserLinks" :key="item.id">
          <div class="box">
            <router-link
              :to="{ name: 'LinkPage', params: { uuid: item.id } }"
              class="link"
              >{{ item.group_id }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddLink from "./modals/AddLink";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "UserLinks",
  title: 'Мои ссылки',
  methods: {
    ...mapActions({ fetchUserLinks: ["user/fetchUserLinks"] }),
    addLink() {
      this.$modal.show(AddLink, {}, { name: "AddLink" });
    }
  },
  computed: {
    ...mapGetters({ getUserLinks: ["user/getUserLinks"] })
  },
  async mounted() {
    await this.$store.dispatch("user/fetchUserLinks");
    // await this.fetchUserLinks()
  }
};
</script>

<style scoped lang="scss">
.box {
  display: block;
  background: #fff;
  // width: 100%;
  height: 160px;
  border-radius: 20px;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
}
.title {
  font-weight: 300;
}
.add_link {
  display: block;
  height: 100%;
  width: 100%;
  line-height: 160px;
  text-align: center;
  text-decoration: none;
  color: #f0641b;
}
.link {
  display: block;
  height: 100%;
  width: 100%;
  line-height: 160px;
  text-align: center;
  text-decoration: none;
  color: #000;
}
</style>