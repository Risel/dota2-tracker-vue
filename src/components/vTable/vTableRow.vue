<template>
  <router-link :to="`/matches/${row_data.match_id}`">
  <div v-if="this.$route.path === '/matches'" class="table__row">
      <MatchesRow class="matches_row" :row_data="row_data"/>
  </div>
  </router-link>
  <div v-if="this.$route.path === '/teams'" class="table__row">
    <TeamsRow class="teams__row" :row_data="row_data"/>
  </div>
</template>

<script>
import MatchesRow from '@/components/vTable/MatchesRow.vue';
import TeamsRow from '@/components/vTable/TeamsRow.vue';

export default {
  name: 'vTableRow',
  components: {
    TeamsRow,
    MatchesRow,
  },
  props: {
    row_data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: inherit;
}
.matches_row{
  flex-basis: 25%;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.teams__row {
  flex-basis: 20%;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.table__row {
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(16, 0, 37, 0.25);
  transition: all .25s ease;
  &:nth-child(even) {
    border: 1px solid rgba(16, 0, 37, 0.15);
  }
  @media screen and (max-width: 660px){
    justify-content: space-around;
    padding: 0;
  }
  &:hover {
    background-color: #3e2474;
  }
}
</style>
