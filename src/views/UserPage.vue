<template>
  <div class="container">
    <NavBar />
    <UserLinks />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import UserLinks from "@/components/UserLinks";

export default {
  name: "UserPage",
  components: {
    NavBar,
    UserLinks
  }
}
</script>

<style scoped>

</style>