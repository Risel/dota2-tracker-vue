<template>
  <default-layout>
    <router-view/>
  </default-layout>
</template>

<style lang="scss">
#app {
  font-family: Inter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  text-align: center;
  box-sizing: border-box;
}
</style>
<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import {
  mapActions, mapGetters,
} from 'vuex';

export default {
  components: {
    DefaultLayout,
  },
  methods: {
    ...mapActions([
      'fetchMatches',
      'fetchTeams',
    ]),
  },
  computed: {
    ...mapGetters([
      'MATCHES',
      'TEAMS',
    ]),
  },
  mounted() {
    this.fetchMatches();
    this.fetchTeams();
  },
};
</script>
