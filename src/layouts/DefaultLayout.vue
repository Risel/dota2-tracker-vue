<template>
  <header class="main__header">
    <SideBar/>
  </header>
  <div class="main__wrapper">
    <slot></slot>
  </div>
  <footer class="main__footer">
    <div class="main__footer-text">2022© OpenDota</div>
    <div class="main__footer-links">
      <a href="https://docs.opendota.com/#section/Introduction"
         class="main__footer-links_link"
         target="_blank">
        О нас
      </a>
      <a href="https://docs.opendota.com/#section/Introduction"
         class="main__footer-links_link"
         target="_blank">
        Политика конфиденциальности
      </a>
      <a href="https://docs.opendota.com/#section/Introduction"
      class="main__footer-links_link"
      target="_blank">
        Документация API
      </a>
      <button class="main__footer-links_button" @click="scrollTop">
        <img src="@/assets/arrow.svg" alt="scoll up">
      </button>
    </div>
  </footer>
</template>

<script>
import SideBar from '@/components/SideBar.vue';

export default {
  name: 'DefaultLayout',
  components: { SideBar },
  methods: {
    scrollTop() {
      return window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss">
html,body {
  background-image: url("../assets/bg.png");
  background-color: $background-color;
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main__wrapper {
  min-height: 100vh;
}
.main__header {
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
}
.main__footer {
  flex: 0 1 auto;
  width: 100%;
  height: 70px;
  background-color: $footer-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-text {
    color: $white-color;
    margin-left: 1rem;
    font-size: 16px;
    font-weight: 500;
  }
  &-links {
    margin-right: 1rem;
    position: relative;
    &_link {
      color: $white-color;
      text-decoration: none;
      margin-right: 2.5rem;
    }
    &_button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: none;
      border-radius: 10px;
      position: absolute;
      bottom: 35px;
      right: 25px;
      width: 64px;
      height: 64px;
      background-color: $button-bg;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        background-color: $green-color;
      }
    }
  }
}
</style>
