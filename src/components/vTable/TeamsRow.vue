<template>
    <div class="row-element">
      <p>1st</p>
    </div>
    <div class="row-element">
      <div class="row-element__team">
        <div class="row-element__team-logo">
          <img :src="row_data.logo_url" :alt="row_data.tag">
        </div>
        <div class="row-element__team-title">
          <h3>{{row_data.name}}</h3>
          <span>{{pluralizedDays(row_data.last_match_time)}}</span>
        </div>
      </div>
    </div>
    <div class="row-element">
      <p>{{Math.floor(row_data.rating)}}</p>
      <div class="progress_rating">
        <div class="progress_rating_color"></div>
      </div>
    </div>
    <div class="row-element">
      <p>{{row_data.wins}}</p>
      <div class="progress_wins">
        <div class="progress_wins_color"></div>
      </div>
    </div>
    <div class="row-element">
      <p>{{row_data.losses}}</p>
      <div class="progress_losses">
        <div class="progress_losses_color"></div>
      </div>
    </div>
</template>

<script>
import numeralize from 'numeralize-ru';

export default {
  name: 'TeamsRow',
  props: {
    row_data: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    pluralizedDays(value) {
      const currentTime = Date.now();
      const diff = currentTime - value;
      // АПИ возвращает странные значения, поэтому я добавил нулей в формулу, чтобы выглядело ближе
      // к исходному макету
      const daysAgo = Math.floor((diff / (3600000000 * 24)));
      const pluralize = numeralize.pluralize(daysAgo, 'день', 'дня', 'дней');
      if (daysAgo === 1) {
        return 'Сегодня';
      }
      return `${daysAgo} ${pluralize} назад`;
    },
    progressWidth() {
      const widthWins = Math.floor(this.row_data.wins / 1500);
      return `${widthWins}%`;
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
  align-items: center;
  text-align: left;
  position: relative;
  @media screen and (max-width: 800px){
    font-size: 0.75rem;
  }
  @media screen and (max-width: 490px){
    align-items: center;
  }
  &__team {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    &-logo {
      height: 45px;
      position: absolute;
      left: 0;
      padding: 25px 0;
      img {
        height: 100%;
        @media screen and (max-width: 800px){
          height: 80%;
          z-index: 1;
        }
      }
    }
    &-title {
      margin-bottom: 20px;
      margin-left: 80px;
      h3 {
        color: $green-color;
        margin-bottom: 0;
        font-size: 24px;
        @media screen and (max-width: 800px){
          font-size: 16px;
          margin-right: 0.25rem;
        }
      }
    }
  }
  .progress_rating {
    position: relative;
    height: 4px;
    width: 80%;
    background-color: black;
    border-radius: 15px;
    @media screen and (max-width: 800px){
      width: 60%;
    }
    &_color {
      position: absolute;
      background-color: #7540F0;
      width: 80%;
      height: 4px;
      border-radius: 15px;
    }
  }
  .progress_wins {
    position: relative;
    height: 4px;
    width: 80%;
    background-color: black;
    border-radius: 15px;
    @media screen and (max-width: 800px){
      width: 60%;
    }
    &_color {
      position: absolute;
      background-color: $green-color;
      width: 60%;
      height: 4px;
      border-radius: 15px;
    }
  }
  .progress_losses {
    position: relative;
    height: 4px;
    width: 80%;
    background-color: black;
    border-radius: 15px;
    @media screen and (max-width: 800px){
      width: 60%;
    }
    &_color {
      position: absolute;
      background-color: $red-color;
      width: 60%;
      height: 4px;
      border-radius: 15px;
    }
  }
}
</style>
