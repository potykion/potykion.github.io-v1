interface AuthState {
  isAuthorized: boolean;
}

export const state: () => AuthState = () => ({
  isAuthorized: false,
});

export const mutations = {
  setAuthorized(state: AuthState) {
    state.isAuthorized = true;

  }
}

export const actions = {
  tryAuth({commit}: { commit: (mutation: string) => void }, pass: string) {
    if (pass === process.env.PASSWORD) {
      commit('setAuthorized');
      return [true, ""];
    } else {
      return [false, "Дальше вы не пройдете, пока не получите бумаги"];
    }
  }
}
