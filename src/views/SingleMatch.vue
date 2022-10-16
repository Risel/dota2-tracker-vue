<template>
  <div>
    {{MATCH}}
  </div>
</template>

<script>
import {
  mapActions, mapGetters,
} from 'vuex';

export default {
  name: 'SingleMatch',
  components: {
  },

  methods: {
    ...mapActions([
      'fetchMatchById',
    ]),
  },
  computed: {
    ...mapGetters([
      'MATCH',
    ]),
  },
  mounted() {
    this.fetchMatchById(this.$route.params.id);
  },
};
</script>

<style scoped>

</style>
