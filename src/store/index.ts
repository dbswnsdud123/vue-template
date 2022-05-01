import { createStore } from "vuex";

import { AStore } from "./AStore";

export default createStore({
  state: {
    testState: {},
  },
  getters: {},
  mutations: {
    mutate(state: any, payload) {
      state[payload[0]] = payload[1];
    },
  },
  actions: {},
  modules: { AStore },
});
