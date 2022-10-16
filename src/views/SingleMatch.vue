<template>
  <main class="match">
    <h1 class="match-title">Детальная информация матча</h1>
    <div class="match__header">
      <div class="match__header-winner">
        Победа: Radiant
      </div>
      <section class="match__header-details">
        <h1 class="match__header-details_score">
          99
        </h1>
        <div class="match__header-details_timings">
          <p class="match__header-details_timings-mode">All draft</p>
          <p class="match__header-details_timings-time">99:59:59</p>
          <p class="match__header-details_timings-helper">закончился 23 часа назад</p>
        </div>
        <h1 class="match__header-details_score_dire ">
          99
        </h1>
      </section>
      <div class="match__header-additional">
        <div>
          <p class="match__header-additional-text">ID матча</p>
          <span class="match__header-additional-helper">5555555</span>
        </div>
        <div>
          <p class="match__header-additional-text">Регион</p>
          <span class="match__header-additional-helper">Singapore</span>
        </div>
        <div>
          <p class="match__header-additional-text">Навык</p>
          <span class="match__header-additional-helper">Unknown</span>
        </div>
      </div>
    </div>
    <section class="match__analysis">
      <span class="match__analysis-warning">запись этого матча не может быть проанализирована</span>
      <div class="match__analysis-buttons">
        <v-button>
          <img src="../assets/analysis.svg" alt="analysis">
          Анализ
        </v-button>
        <v-button>
          <img src="../assets/download.svg" alt="download">
          Загрузить запись
        </v-button>
      </div>
    </section>
  </main>
</template>

<script>
import {
  mapActions, mapGetters,
} from 'vuex';
import VButton from '@/components/vButton.vue';

export default {
  name: 'SingleMatch',
  components: {
    VButton,
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

<style lang="scss" scoped>
.match {
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  margin-left: 30px;
  justify-content: center;
  align-items: center;
  &-title {
    color: $white-color;
    font-size: 48px;
    text-transform: uppercase;
  }
  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    &-winner {
      background-color: #fff;
      color: $red-color;
      font-weight: 700;
      border-radius: 10px;
      padding: 10px 15px;
    }
    &-details {
      display: flex;
      flex-direction: row;
      margin: 0 4rem;
      &_timings {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        color: #fff;
        &-mode {
          font-size: 24px;
        }
        &-time {
          font-size: 32px;
          margin: 0;
        }
        &-helper {
          font-size: 16px;
          color: $white-color;
        }
      }
      &_score {
        font-size: 64px;
        font-weight: 700;
        color: $green-color;
        &_dire {
          font-size: 64px;
          font-weight: 700;
          color: $red-color;
        }
      }
    }
    &-additional {
      display: flex;
      flex-direction: row;
      color: #fff;
      gap: 1.5rem;
      &-text {
        font-size: 16px;
        font-weight: 700;
      }
      &-helper {
        font-size: 14px;
        color: $white-color;
      }
    }
  }
  &__analysis {
    display: flex;
    flex-direction: column;
    &-warning {
      font-size: 14px;
      color: #EECD00;
    }
    &-buttons {
      display: flex;
      justify-content: space-evenly;
      img {
        margin-right: 0.75rem;
      }
    }
  }
}
</style>
