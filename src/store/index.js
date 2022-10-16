import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    matches: [],
    teams: [],
    match: {},
  },
  getters: {
    MATCHES: (state) => state.matches,
    TEAMS: (state) => state.teams,
    MATCH: (state) => state.match,
  },
  mutations: {
    SET_MATCHES(state, matches) {
      state.matches = matches;
    },
    SET_TEAMS(state, teams) {
      state.teams = teams;
    },
    SET_MATCH(state, match) {
      state.match = match;
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
    async fetchMatchById({ commit }, id) {
      try {
        const data = await axios.get(`https://api.opendota.com/api/matches/${id}`);
        commit('SET_MATCH', data.data);
        return data;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
});
