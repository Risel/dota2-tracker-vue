<template>
  <div class="row-element first-element">
    <h3 class="row-element-title">
        {{row_data.match_id}}
    </h3>
    <span>
       {{pluralizedTime(row_data.start_time)}} / Immortal
      </span>
  </div>
  <div class="row-element">{{matchDuration(row_data.duration)}}</div>
  <div class="row-element-heroes radiant">
      <img src="../../assets/Heroes.png" alt="hero">
      <img src="../../assets/Heroes.png" alt="hero">
      <img src="../../assets/Heroes.png" alt="hero">
      <img src="../../assets/Heroes.png" alt="hero">
      <img src="../../assets/Heroes.png" alt="hero">
  </div>
  <div class="row-element-heroes">
    <img src="../../assets/Heroes.png" alt="hero">
    <img src="../../assets/Heroes.png" alt="hero">
    <img src="../../assets/Heroes.png" alt="hero">
    <img src="../../assets/Heroes.png" alt="hero">
    <img src="../../assets/Heroes.png" alt="hero">
  </div>
</template>

<script>
import numeralize from 'numeralize-ru';

export default {
  name: 'MatchesRow',
  props: {
    row_data: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    matchDuration(secs) {
      const m = Math.floor(secs / 60) % 60;
      const s = secs % 60;
      if (s < 10) {
        return (`${m}:0${s}`);
      }
      if (m < 10) {
        return (`0${m}:${s}`);
      }
      if (m < 10 && s < 10) {
        return (`0${m}:0${s}`);
      }
      return (`${m}:${s}`);
    },
    pluralizedTime(value) {
      const currentTime = Date.now();
      const diff = currentTime - value;
      const hoursAgo = Math.floor((diff / 3600) % 24);
      const pluralize = numeralize.pluralize(hoursAgo, 'час', 'часа', 'часов');
      if (hoursAgo === 0) {
        return 'Менее часа назад';
      }
      return `${hoursAgo} ${pluralize} назад`;
    },
  },
};
</script>

<style lang="scss" scoped>
.row-element {
  display: flex;
  flex-basis: 25%;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  &-heroes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 2px;
    img {
      width: 2.25rem;
      height: 1.5rem;
      border-radius: 4px;
    }
  }
}
.first-element {
  margin: 0 30px;
  padding-bottom: 20px;
}
.radiant {
  margin-right: 0.5rem;
}
</style>
