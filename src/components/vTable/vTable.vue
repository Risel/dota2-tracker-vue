<template>
  <div class="table">
    <h1 class="title">{{title}}</h1>
    <div class="table__header">
      <p v-for="column in table_columns" :key="column">{{column}}</p>
    </div>
    <div class="table__body">
      <v-table-row
        v-for="row in paginatedElements"
        :key="row.match_id || row.team_id"
        :row_data="row"
      />
    </div>
      <v-button class="table__button"
                v-if="this.elementsPerPage !== this.data.length"
                @click="loadMore"
      >
        Загрузить ещё
      </v-button>
    <div v-else style="margin-top:50px"></div>
  </div>
</template>

<script>
import vTableRow from '@/components/vTable/vTableRow.vue';
import vButton from '@/components/vButton.vue';

export default {
  name: 'vTable',
  components: {
    vButton,
    vTableRow,
  },
  data() {
    return {
      pageNumber: 0,
      elementsPerPage: 10,
    };
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    table_columns: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
    },
  },
  computed: {
    pageCount() {
      return Math.ceil(this.data.length / 10);
    },
    paginatedElements() {
      const start = this.pageNumber * this.elementsPerPage;
      const end = this.elementsPerPage + start;
      return this.data.slice(start, end);
    },
  },
  methods: {
    loadMore() {
      this.elementsPerPage += 10;
    },
  },
};

</script>

<style lang="scss" scoped>
.title {
  text-align: start;
  text-transform: uppercase;
  margin-top: 120px;
  margin-left: 30px;
}

.table {
  max-width: 900px;
  margin: 0 auto;
  color: $white-color;
  &__header {
    height: 60px;
    text-transform: uppercase;
    font-weight: 700;
    text-align: left;
    background-color: $violet-color;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 660px){
      padding: 0 20px;
      height: 50px;
      font-size: 14px;
    }
    @media screen and (max-width: 660px){
      padding: 0 10px;
      height: 50px;
      font-size: 11px;
    }
  }
  &__button {
    margin: 2.5rem auto;
  }
}
</style>
