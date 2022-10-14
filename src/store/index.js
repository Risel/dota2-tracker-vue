import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    matches: [],
    teams: [],
  },
  getters: {
    MATCHES: (state) => state.matches,
    TEAMS: (state) => state.teams,
  },
  mutations: {
    SET_MATCHES(state, matches) {
      state.matches = matches;
    },
    SET_TEAMS(state, teams) {
      state.teams = teams;
    },
  },
  actions: {
    async fetchMatches({ commit }) {
      try {
        const data = await axios.get('https://api.opendota.com/api/publicMatches');
        commit('SET_MATCHES', data.data);
        return data;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    async fetchTeams({ commit }) {
      try {
        const data = await axios.get('https://api.opendota.com/api/teams');
        commit('SET_TEAMS', data.data);
        return data;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
});
