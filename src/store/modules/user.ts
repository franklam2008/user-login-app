export default {
  state: () => ({
    name: "Unknown",
    detail: null,
    student_list: [],
  }),
  getters: {},
  mutations: {
    SET_NAME(state: any, payload: string) {
      state.name = payload;
    },
    SET_USER(state: any, payload: string) {
      state.detail = payload;
    },
    SET_STUDENT_LIST(state: any, payload: string) {
      state.student_list = payload;
    },
  },
  actions: {
    saveName({ commit }: { commit: any }, data: any) {
      commit("SET_NAME", data);
    },
    loadedUser({ commit }: { commit: any }, data: any) {
      commit("SET_USER", data);
    },
    loadedStudentList({ commit }: { commit: any }, data: any) {
      commit("SET_STUDENT_LIST", data);
    },
  },
};
