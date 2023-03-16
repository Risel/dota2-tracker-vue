<template>
  <div class="table">
    <h1 class="title">{{ title }}</h1>
    <div class="table__header">
      <p v-for="column in table_columns" :key="column">{{column}}</p>
    </div>
    <div class="table__body">
      <v-table-row
        v-for="row in paginatedElements"
        :key="row.match_id || row.team_id"
        :rowData="row"
      />
    </div>
    <v-button class="table__button" v-if="elementsPerPage != props.data.length" @click="loadMore">
      Загрузить ещё
    </v-button>
    <div v-else style="margin-top: 50px;"></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import vTableRow from '@/components/vTable/vTableRow.vue';
import vButton from '@/components/vButton.vue';

const props = defineProps({
  data: Array,
  table_columns: Array,
  title: String,
});

const pageNumber = ref(0);
const elementsPerPage = ref(10);

const paginatedElements = computed(() => {
  const start = pageNumber.value * elementsPerPage.value;
  const end = elementsPerPage.value + start;
  return props.data.slice(start, end);
});

const loadMore = () => {
  elementsPerPage.value += 10;
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
