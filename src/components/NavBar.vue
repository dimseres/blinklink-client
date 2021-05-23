<template>
  <div
    class="container-fluid position-relative nav_image"
    :style="{ backgroundImage: `url(${coverImage})` }"
  >
    <div :class="{ cover_background: coverImage }"></div>
    <nav class="content header container">
      <div class="row justify-content-between align-items-center">
        <Logo class="col-3" :class="{ bright_filter: coverImage }" />
        <div class="col-9 text-end">
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
          >
            <img src="@/assets/user.svg" width="20" height="20" alt="" />
          </router-link>
        </div>
        <!-- <a class="add__link" :class="{bright_filter: coverImage}" title="добавить ссылку"></a> -->
      </div>
      <div class="control" :class="{ bright_filter: coverImage }">
        <router-link :to="{ name: 'Home' }" class="control__link"
          ><img src="@/assets/right-arrow.png" alt="" />
          главная
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "./Logo";

export default {
  name: "NavBar",
  props: ["groupCover"],
  components: {
    Logo
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
};
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
}
.logo {
  margin-bottom: 0;
}

.content {
  position: relative;
  width: 1270px;
  margin: auto;
  padding: 20px 0px;
}

.bright_filter {
  filter: brightness(10);
}

.control {
  margin-top: 5px;
  padding: 0;
  position: relative;
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
  color: #392564;
}

.nav_image {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.cover_background {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  background-color: rgba($color: #000000, $alpha: 0.3) !important;
  backdrop-filter: blur(15px) saturate(100%) contrast(100%) brightness(100%);
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
    transform: translateY(calc(50% - 4px));
    background: #392564;
    border-radius: 20px;
  }

  &::before {
    content: "";
    position: absolute;
    transform: translateX(calc(50% + 6px));
    top: 0px;
    left: 50%;
    width: 4px;
    height: 21px;
    background: #392564;
    border-radius: 20px;
  }
}
</style>