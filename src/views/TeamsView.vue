<template>
  <div class="teams">
    <vTable
      :data="TEAMS"
      :table_columns="teams_columns"
      :title="title"
    />
  </div>
</template>

<script>
import vTable from '@/components/vTable/vTable.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    vTable,
  },
  data() {
    return {
      teams_columns: ['РАНГ', 'НАЗВАНИЕ КОМАНДЫ', 'РЕЙТИНГ', 'ПОБЕДЫ', 'ПРОИГРЫШИ'],
      title: 'Список команд',
      intervalId: 0,
    };
  },
  methods: {
    ...mapActions([
      'fetchTeams',
    ]),
  },
  computed: {
    ...mapGetters([
      'TEAMS',
    ]),
  },
  created() {
    this.fetchTeams();
    this.intervalId = setInterval(this.fetchTeams, 60000);
  },
  destroy() {
    clearInterval(this.intervalId);
  },
};
</script>

<style lang="scss" scoped>
.teams {
  @media screen and (max-width: 800px) {
    font-size: 0.75rem;
  }
}
</style>
