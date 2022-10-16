<template>
  <button class="v-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'vButton',
};
</script>

<style lang="scss" scoped>
.v-button {
  margin-top: 50px;
  margin-bottom: 120px;
  padding: 16px 20px;
  background-color: #fff;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  border: none;
  transition: all .2s ease;
  display: flex;
  &:hover,:active {
    background-color: #e6e5e5;
  }
  &:active {
    transform: scale(1.02);
  }
}
</style>
