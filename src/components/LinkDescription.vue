<template>
  <div class="link__description">
    <h4 class="link__title">{{ data.name }}
      <span v-if="data.verified" class="link__official">
        <img src="@/assets/check-mark1.svg" alt="">
      </span>
    </h4>
    <p class="link__text">{{ data.description }}</p>
    <div class="link__info">
      <div class="subscribers">
        <p><img src="@/assets/followers.svg" alt=""></p>
        <p>Подписчиков</p>
        <p class="number">{{ data.members_count | spaceNumbers }}</p>
      </div>
    </div>
    <div class="link__code">
      <div class="code__container">
        <div class="code__gradient">
          <img :src="`http://localhost:8000${qrcode}`" alt="" width="100%">
        </div>
      </div>
      <div>
        <button class="code__button" :href="apiData.url">перейти</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LinkDescription",
  props: ['data', 'qrcode', 'apiData'],
  filters: {
    spaceNumbers(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
  }
}
</script>

<style scoped lang="scss">
.link__title {
  font-weight: 700;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.link__official {
  position: relative;
  top: -5px;
  margin-left: 5px;
}

.link__text {
  margin: auto;
  width: 768px;
  text-align: center;
  font-weight: 400;
  line-height: 1.2;
  color: #404040;
}

.link__code {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.code__button {
  margin-top: 30px;
  border: 1px solid rgba(#000, 0);
  padding: 5px 40px;
  border-radius: 20px;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
  background: #fff;
  transition: .2s;

  &:hover {
    border: 1px solid #000;
  }
}

.code__gradient {
  background-image: linear-gradient(to right, #EE1F37, #F0641B);
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
  margin-top: 30px;
  //padding: 5px;
}

.subscribers {
  margin-top: 30px;

  p {
    text-align: center;
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