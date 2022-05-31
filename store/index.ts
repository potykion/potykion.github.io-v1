import {hash} from "~/logic/core/hash";

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

  setAuthorized(state: AuthState, authorized: boolean) {
    state.isAuthorized = authorized;

  }
}

export const actions = {
  nuxtServerInit({commit}: any, {$config}: any) {
    commit('setPassword', hash($config.password));



  },

  loadAuthorized({commit}: any) {
    let storeParsed = JSON.parse(localStorage.getItem('store') || '{}');
    if (storeParsed.expires || new Date() > new Date()) {
      commit(
        'setAuthorized',
        storeParsed.isAuthorized
      )
    }
  },

  tryAuth({commit, state}: any, pass: string) {
    console.log(hash(pass));
    console.log(state.password);

    if (hash(pass) === state.password) {
      commit('setAuthorized', true);
      let expires = new Date();
      expires.setDate(expires.getDate() + 1);
      localStorage.setItem('store', JSON.stringify({...state, expires}));
      return [true, ""];
    } else {
      return [false, "Дальше вы не пройдете, пока не получите бумаги"];
    }
  }
}
