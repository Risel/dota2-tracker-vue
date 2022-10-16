<template>
  <div class="matches">
    <vTable
      :data="MATCHES"
      :table_columns = "matches_columns"
      :title = "title"
    />
  </div>
</template>

<script>
import {
  mapActions, mapGetters,
} from 'vuex';
import vTable from '@/components/vTable/vTable.vue';

export default {
  name: 'MatchesView',
  data() {
    return {
      matches_columns: ['ID', 'Длительность', 'RADIANT', 'DIRE'],
      title: 'Список матчей',
      intervalId: 0,
    };
  },
  components: {
    vTable,
  },
  methods: {
    ...mapActions([
      'fetchMatches',
    ]),
  },
  computed: {
    ...mapGetters([
      'MATCHES',
    ]),
  },
  created() {
    this.fetchMatches();
    this.intervalId = setInterval(this.fetchMatches, 60000);
  },
  destroy() {
    clearInterval(this.intervalId);
  },
};

</script>

<style lang="scss" scoped>

</style>
