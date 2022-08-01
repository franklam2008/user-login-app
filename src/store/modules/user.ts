export default {
  state: () => ({
    name: "Unknown",
    detail: null
  }),
  getters: {},
  mutations: {
    SET_NAME(state: any, payload: string) {
      state.name = payload;
    },
    SET_USER(state: any, payload: string) {
      state.detail = payload;
    },
  },
  actions: {
    saveName({ commit }: { commit: any }, data: any) {
      commit("SET_NAME", data);
    },
    loadedUser({ commit }: { commit: any }, data: any) {
      commit("SET_USER", data);
    },
  },
};
