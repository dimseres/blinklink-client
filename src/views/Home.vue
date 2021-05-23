<template>
  <div class="home">
    <div class="container p-3 nav text-end">
      <div class="container w-100">
        <router-link
            v-if="isAuthenticated"
            :to="{ name: 'UserSpace' }"
            class="profile"
            href=""
          >
            <img src="@/assets/user.svg" width="20" height="20" alt="" />
          </router-link>
          <router-link
            v-else
            :to="{ name: 'AuthPage' }"
            class="profile"
            href=""
          ></router-link>
      </div>
    </div>
    <Logo/>
    <SearchInput />
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import SearchInput from "@/components/SearchInput";
import { mapGetters } from "vuex";

export default {
  name: 'Home',
  components: {
    Logo,
    SearchInput,
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "user/isAuthenticated",
      linkInfo: "link/getLinkInfo"
    }),
    coverImage() {
      if (this.linkInfo && this.linkInfo.cover.enabled) {
        return this.linkInfo.cover.images[4].url;
      }
      return "";
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.nav {
  position: absolute;
  top: 0px;
  height: 20px;

  .profile {
    width: 20px;
    height: 20px;
    //background-image: url("../assets/user.svg");
  }
}
</style>
