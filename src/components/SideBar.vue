<template>
  <nav>
      <div class="toggler">
        <!-- eslint-disable -->
        <div class="toggler_btn" @click="show = !show">
          <svg
            v-if="!show"
            width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 2H19C19.5523 2 20 2.44772 20 3C20 3.55228 19.5523 4 19
4H1C0.447716 4 0 3.55228 0 3C0 2.44772 0.447715 2 1 2Z" fill="white"/>
            <path d="M1 9H19C19.5523 9 20 9.44772 20 10C20 10.5523 19.5523 11 19 11H1C0.447716
11 0 10.5523 0 10C0 9.44772 0.447715 9 1 9Z" fill="white"/>
            <path d="M1 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19
18H1C0.447716 18 0 17.5523 0 17C0 16.4477 0.447715 16 1 16Z" fill="white"/>
          </svg>
          <svg
            v-else
            width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711
        0.292893L9 7.58579L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311
        17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L10.4142
        9L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166
        18.0976 16.6834 18.0976 16.2929 17.7071L9 10.4142L1.70711 17.7071C1.31658
        18.0976 0.683417 18.0976 0.292893 17.7071C-0.0976311 17.3166 -0.0976311 16.6834
        0.292893 16.2929L7.58579 9L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417
         0.292893 0.292893Z" fill="white"/>
          </svg>
        </div>
        <!-- eslint-enable -->
        <router-link class="logo" to="/">
          <img src="@/assets/logo.svg" alt="logo">
        </router-link>
      </div>
    <div class="hamburger-menu" v-if="show">
      <div  class="hamburger-menu__box">
        <ul>
          <li>
            <router-link class="hamburger-menu__box-item" to="/matches">
              Список матчей
            </router-link>
            <img src="../assets/arrow.svg" alt="">
          </li>
          <li>
            <router-link class="hamburger-menu__box-item" to="/teams">Список команд</router-link>
            <img src="../assets/arrow.svg" alt="">
          </li>
          <li>
            <a class="hamburger-menu__box-item" to="" disabled>Сравнение команд</a>
            <img src="../assets/arrow.svg" alt="">
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  left: 0;
  height: 100%;
  z-index: 10000;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}
.toggler {
  position: relative;
  display: flex;
  justify-content: flex-start;
  margin: 20px 22px;
  align-items: center;
  flex-direction: row;
  z-index: 1000;
  .logo {
    margin-left: 1rem;
    position: relative;
    @media screen and (max-width: 800px){
      position: absolute;
      left: 30vw;
    }
    @media screen and (max-width: 580px){
      position: absolute;
      left: 20vw;
    }
  }
  svg {
    cursor: pointer;
    margin-left: 10px;
    transition: all .2s ease;
    &:hover {
      path {
        fill: $green-color;
      }
    }
  }
}
.hamburger-menu {
  display: flex;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 0.83;
  width: 370px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: $violet-color;
  @media screen and (max-width: 800px){
    min-width: 100vw;
    opacity: 1;
  }
  &__box {
    width: 100%;
    list-style: none;
    li{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
      @media screen and (max-width: 800px){
        justify-content: center;
      }
      img {
        transform: rotate(90deg);
        margin-right: 20px;
        @media screen and (max-width: 800px){
          margin-left: 1rem;
        }
      }
      a {
        text-decoration: none;
        font-weight: 700;
        font-size: 16px;
        color: #fff;
        transition: all .2s ease;
        &:hover {
          color: $green-color;
        }
      }
      &:last-child {
        pointer-events: none;
        a {
          color: $gray-color;
        }
      }
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
