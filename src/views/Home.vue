<template>
  <div class="home">
    <div class="container p-3 nav text-end">
      <div class="container w-100">
        <router-link :to="{name: 'AuthPage'}" class="profile" href="">
          <img src="@/assets/user.svg" width="20" height="20" alt="">
        </router-link>
      </div>
    </div>
    <Logo/>
    <SearchInput />
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import SearchInput from "@/components/SearchInput";

export default {
  name: 'Home',
  components: {
    Logo,
    SearchInput,
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
