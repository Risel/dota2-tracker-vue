<template>
  <header class="main__header">
    <nav>
      <div class="navbar">
        <div class="container nav-container">
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <div class="menu">
            <router-link to="/matches">Список матчей</router-link>
            <router-link to="/teams">Список команд</router-link>
          </div>
          <router-link to="/">
            <img src="@/assets/logo.svg" alt="logo">
          </router-link>
        </div>
      </div>
    </nav>

  </header>
  <slot></slot>
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
      <button class="main__footer-links_button">
        <img src="@/assets/arrow.svg" alt="scoll up">
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>

<style lang="scss">
html {
  background-image: url("../assets/bg.png");
  background-color: $background-color;
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  width: 100vw;
  height: 100vh;
  position: relative;
}
.container {
  max-width: 1050px;
  width: 90%;
  margin: auto;
}
.navbar {
  width: 100%;
  .menu {
    display: flex;
  }
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    a {
      text-decoration: none;
      color: #fff;
      font-weight: 700;
      transition: all 0.2s ease;
      &:hover {
        color: $green-color
      }
    }
  }
}

.main__header {
  display: flex;
  flex-direction: row;
  img {
    margin-left: 1rem;
    cursor: pointer;
  }
}
.main__footer {
  position: absolute;
  bottom: 0;
  left: 0;
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
