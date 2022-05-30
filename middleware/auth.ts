import {Context} from "@nuxt/types"

const authMiddleware = (context: Context) => {
  if (context.route.path.startsWith("/private") && !context.route.path.startsWith("/private/auth")) {
    if (context.store.state.isAuthorized) {
    } else {
      return context.redirect("/private/auth");
    }
  } else {
  }
}
export default authMiddleware;
