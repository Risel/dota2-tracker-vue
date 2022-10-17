<template>
  <div class="home">
    <main class="home__main">
      <img  class="home__main-logo" src="../assets/logo.svg" alt="logo">
      <!--   eslint-disable   -->
      <input type="text" class="home__main-search" placeholder="Поиск по сайту...">
      <!--   eslint-enable   -->
      <div class="home__main-buttons">
        <v-button>
          <router-link to="/matches">
            Список матчей
          </router-link>
        </v-button>
        <v-button>
          <router-link to="/teams">
            Список команд
          </router-link>
        </v-button>
      </div>
    </main>
  </div>
</template>

<script>
import vButton from '@/components/vButton.vue';

export default {
  name: 'HomeView',
  components: {
    vButton,
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-top: 8%;
    &-logo {
      @media screen and (max-width: 650px) {
        width: 400px;
      }
      @media screen and (max-width: 450px) {
        width: 200px;
      }
      width: 600px;
      height: 200px;
    }
    &-search {
      background: rgba(16, 0, 37, 0.25);
      opacity: 0.9;
      border: none;
      border-bottom: 2px solid #fff;
      border-radius: 4px 4px 1px 1px;
      padding-top: 10px;
      padding-left: 20px;
      width: 600px;
      height: 60px;
      font-size: 16px;
      @media screen and (max-width: 650px) {
        width: 250px;
      }
      @media screen and (max-width: 450px) {
        width: 250px;
      }
      &::placeholder {
        color: #fff;
      }
    }
    &-buttons {
      display: flex;
      flex-direction: row;
      gap: 20px;
      @media screen and (max-width: 415px){
        flex-direction: column;
        gap: 0;
        button {
          margin: 40px 0;
          &:nth-child(even) {
            margin-top: 0;
          }
        }
      }
      a {
        color: black;
        text-decoration: none;
        font-weight: 500;
      }
    }
  }
}
</style>
