// @ts-nocheck

export default async (ctx, config, { strapi }) => {
  if (!ctx.state.user) {
    return ctx.unauthorized("You must be logged in to access this route.")
  }

  return true // 認証済みなら通す
}
