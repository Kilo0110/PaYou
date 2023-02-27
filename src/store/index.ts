import { createStore } from "vuex";
import users from "@/assets/users.json";

const store = createStore({
  state: {
    users,
    filter: "all",
    searchQuery: "",
    sortBy: "default",
  },
  mutations: {
    updateFilter(state, payload) {
      state.filter = payload;
    },
    updateUser(state, payload) {
      // Find the user object with the matching id
      const userToUpdate = state.users.find((user) => user.id === payload.id);

      // If the user object is found, update its properties with the values in the data argument
      if (userToUpdate) {
        Object.keys(payload.data).forEach((key) => {
          // @ts-ignore
          userToUpdate[key] = payload.data[key];
        });
      }
    },
    updateSearchQuery(state, payload) {
      state.searchQuery = payload;
    },
    updateSortBy(state, payload) {
      state.sortBy = payload;
    },
  },
  actions: {
    updateFilter({ commit }, payload) {
      commit("updateFilter", payload);
    },
    updateUser({ commit }, payload: object) {
      commit("updateUser", payload);
    },
    updateSearchQuery({ commit }, payload: object) {
      commit("updateSearchQuery", payload);
    },
    updateSortBy({ commit }, payload: object) {
      commit("updateSortBy", payload);
    },
  },
  getters: {
    getTotalPayableAmount(state) {
      const usersOwing = state.users.filter(
        (user) => user.paymentStatus !== "paid"
      );
      return usersOwing.reduce(
        (accumulator, user) => accumulator + user.amountDue,
        0
      );
    },
    getPaidUsers(state) {
      return state.users.filter((user) => user.paymentStatus === "paid");
    },
    getUnpaidUsers(state) {
      return state.users.filter((user) => user.paymentStatus === "unpaid");
    },
    getOverdueUsers(state) {
      return state.users.filter((user) => user.paymentStatus === "overdue");
    },
  },
});

export default store
