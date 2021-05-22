<template>
  <div class="container-fluid w-100 auth__bg">
    <div class="h-100 row align-items-center">
      <div class="col-5 d-flex align-items-center bg-w h-100">
        <div class="control">
          <router-link :to="{name: 'Home'}" class="control__link"><img src="@/assets/right-arrow.png" alt="">главная
          </router-link>
        </div>
        <div class="col-12">
          <div class="row justify-content-center ">
            <form action="" class="col-8 auth" @submit.prevent="sendForm">
              <div class="d-block text-center">
                <img src="@/assets/logo2.svg" alt="">
              </div>
              <div class="form-group d-flex flex-column mt-5">
                <label for="login">Логин</label>
                <input type="text" id="login" v-model="login" class="input__auth" placeholder="example@mail.com">
              </div>
              <div class="form-group d-flex flex-column mt-3">
                <label for="password">Пароль</label>
                <input type="password" v-model="password" id="password" class="input__auth" value="123">
              </div>
              <div class="form-group d-block text-center">
                <button class="btn-dark w-50 mt-4" v-if="!isRegistration">
                  войти
                </button>
                <button class="btn-dark w-50 mt-4" v-else>
                  зарегистрироваться
                </button>
                <a v-if="!isRegistration" href="" class="btn-register w-50 mt-3 d-block m-auto"
                   @click.prevent="registration">
                  регистрация
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "Auth.vue",
  data() {
    return {
      login: null,
      password: null,
      isRegistration: false,
    }
  },
  methods: {
    ...mapActions({userLogin: 'user/userLogin', register: 'user/userRegister'}),
    async sendForm() {
      if (this.isRegistration) {
        await this.register({
          email: this.login, password: this.password
        }).then(() => {
          this.$router.push({name: 'UserSpace'})
        })

        // this.$axios.post()
      } else {
        await this.userLogin({
          login: this.login,
          password: this.password
        }).then(() => {
          this.$router.push({name: 'UserSpace'})
        })

      }
    },
    registration() {
      this.isRegistration = true
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-dark {
  border-radius: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: 900;
  background: #3B2565;
}

.btn-register {
  color: #42266C;
  text-decoration: none;
}

.control__link {
  text-decoration: none;
  color: #42266C;
}

.auth__bg {
  background-image: url("../assets/authbg3.svg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.auth {
  label {
    color: #555555;
    font-weight: 900;
    font-size: 14px;
    margin-bottom: 5px;
  }
}

.control {
  position: absolute;
  top: 0;
  margin-left: 20px;
  //bottom: -30px;
  left: 0px;

  img {
    height: 20px;
    transform: rotate(180deg);
    padding-left: 10px;
  }
}

.bg-w {
  background: white;
}

//.auth_bg {
//  background: url("@/assets/authbg.svg");
//}

.input__auth {
  font-size: 14px;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
  border: #eee;
  border-radius: 10px;
  padding: 10px 15px;

  &:focus-visible {
    outline: none;
  }
}
</style>