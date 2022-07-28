export default {
  state: () => ({
    name: "Unknown",
  }),
  getters: {},
  mutations: {
    SET_NAME(state: any, payload: string) {
      state.name = payload;
    },
  },
  actions: {
    saveName({ commit }: { commit: any }, data: any) {
      commit("SET_NAME", data);
    },
  },
};
