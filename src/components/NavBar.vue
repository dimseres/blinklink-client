<template>
  <nav class="content header container">
    <div class="row justify-content-between align-items-center">
      <Logo class="col-3"/>
      <a class="add__link" title="добавить ссылку"></a>
    </div>
    <div class="control">
      <router-link :to="{name: 'Home'}" class="control__link"><img src="@/assets/right-arrow.png" alt="">
        главная
      </router-link>
    </div>
  </nav>
</template>

<script>
import Logo from "./Logo";

export default {
  name: "NavBar",
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
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