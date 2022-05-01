export const AStore = {
  namespaced: true,
  state: () => ({
    apiData: {},
  }),
  mutations: {
    mutate(state: any, payload: any[]) {
      state[payload[0]] = payload[1];
    },
  },
  getters: {},
  actions: {},
};
