<template>
  <form class="search__wrapper">
    <div class="search_input">
      <input type="text" v-model="searchWord" placeholder="theloopah" @submit.prevent="search">
    </div>
    <div class="search__actions">
      <button class="search__btn" @click.prevent="search">Искать</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchInput.vue",
  data() {
    return {
      searchWord: null,
    }
  },
  methods: {
    hello() {
      alert()
    },
    search() {
      this.$router.push({name: 'LinkPage', params: {uuid: this.searchWord}})
    }
  }
}
</script>

<style lang="scss" scoped>
.search__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.search_input {
  display: flex;
  width: 100%;
  margin-bottom: 30px;

  input {
    width: 760px;
    border-radius: 20px;
    padding: 10px 40px;
    border: none;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(#000, 0);
    transition: .2s;

    &:focus-visible {
      outline: none;
      border-radius: 20px;
      border: 1px solid #eee;
    }
  }
}



.search {
  &__actions {
    display: flex;
  }

  &__btn {
    padding: 10px 40px;
    border: none;
    border-radius: 20px;
    background: #3B2565;
    color: #fff;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 14px;
    border: 1px solid rgba(#000, 0);
    transition: .2s;

    &:hover {
      background: #fff;
      color: #3B2565;
      border: 1px solid #3B2565;
    }
  }
}
</style>