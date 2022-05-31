import {Context} from "@nuxt/types";

interface AuthState {
  isAuthorized: boolean;
  password: string;
}

export const state: () => AuthState = () => ({
  isAuthorized: false,
  password: "",
});

export const mutations = {
  setPassword(state: AuthState, password: string) {
    state.password = password;
  },

  setAuthorized(state: AuthState) {
    state.isAuthorized = true;

  }
}

export const actions = {
  nuxtServerInit({commit}: any, {$config}: any) {
    commit('setPassword', $config.password);
  },

  tryAuth({commit, state}: any, pass: string) {
    if (pass === state.password) {
      commit('setAuthorized');
      return [true, ""];
    } else {
      return [false, "Дальше вы не пройдете, пока не получите бумаги"];
    }
  }
}
