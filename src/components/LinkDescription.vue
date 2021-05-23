<template>
  <div class="container">
    <div class="row mt-3 mb-3">
      <div class="col-12">
        <h4 class="link__title">
          <img class="group_image mr-5" :src="linkInfo.photo_100" alt='avatar'/>{{ linkInfo.name }}
          <span v-if="linkInfo.verified" class="link__official">
            <img src="@/assets/check-mark1.svg" alt="" />
          </span>
        </h4>
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <div class="link__code">
          <div class="code__container">
            <div class="code__gradient" :style="{backgroundImage: `url(${coverImage})`}">
              <img
                :src="`http://localhost:8000${qrcode}`"
                alt=""
                width="100%"
              />
            </div>
            
          </div>
          <a class="code__button" :href="apiData.url">перейти</a>
        </div>
      </div>
      <div class="col-6">
        <div class="link__info">
          <div class="subscribers">
            <!-- <p><img src="@/assets/followers.svg" alt="" /></p> -->
            <p>Подписчиков</p>
            <p class="number">{{ linkInfo.members_count | spaceNumbers }}</p>
          </div>
        </div>
        <h5 class="mt-4">Описание</h5>
        <p class="link__text">{{linkInfo.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "LinkDescription",
  props: ["data", "qrcode", "apiData"],
  title() {
    return `${this.linkInfo.name} | blinklink`
  },
  filters: {
    spaceNumbers(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
  },
  computed: {
    ...mapGetters({ linkInfo: "link/getLinkInfo" }),
    coverImage() {
      if (this.linkInfo && this.linkInfo.cover.enabled) {
        return this.linkInfo.cover.images[4].url;
      } else if (this.linkInfo && this.linkInfo.photo_100) {
        return this.linkInfo.photo_100
      }
      return "";
    }
  }
};
</script>

<style scoped lang="scss">
.group_image {
  margin-right: 20px;
  width: 75px;
  height: 75px;
  border-radius: 50%;
}
.link__title {
  font-weight: 700;
  // display: flex;
  // align-items: center;
  // justify-content: center;
}

.link__official {
  position: relative;
  top: -5px;
  margin-left: 5px;
}

.link__text {
  // margin: auto;
  // width: 768px;
  // text-align: center;
  font-weight: 400;
  line-height: 1.2;
  font-size: 14px;
  color: #404040;
  white-space: pre-wrap;
}

.link__code {
  text-align: center;
  width: 264px;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
}

.code__button {
  display: inline-block;
  text-decoration: none;
  margin-top: 30px;
  border: 1px solid rgba(#000, 0);
  padding: 5px 40px;
  border-radius: 20px;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
  background: #fff;
  transition: 0.2s;

  &:hover {
    border: 1px solid #000;
  }
}

.code__gradient {
  // background-image: linear-gradient(to right, #ee1f37, #f0641b);
  border-radius: 20px;
  padding: 3px;
  background-size: 400% 400%;
  animation: animateBackground 15s ease infinite;

  img {
    background: #fff;
    border-radius: 20px;
  }
}

.code__container {
  position: relative;
  width: 264px;
  height: 264px;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  // margin-top: 30px;
  //padding: 5px;
}

.subscribers {
  // margin-top: 30px;

  p {
    // text-align: center;
    margin-bottom: 0px;
    font-weight: 900;

    &.number {
      font-size: 24px;
      font-weight: 900;
    }
  }
}

@keyframes animateBackground {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>