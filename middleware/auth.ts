import {Context} from "@nuxt/types"

const authMiddleware = async (context: Context) => {
  if (process.server) return ;

  if (context.route.path.startsWith("/private") && !context.route.path.startsWith("/private/auth")) {
    await context.store.dispatch('loadAuthorized');
    if (context.store.state.isAuthorized || context.$config.NODE_ENV === 'dev') {
      // Все ок, мы вошли или мы на деве
    } else {
      return context.redirect("/private/auth");
    }
  } else {
  }
}
export default authMiddleware;
