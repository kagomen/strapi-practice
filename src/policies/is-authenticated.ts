// @ts-nocheck

export default async (ctx, config, { strapi }) => {
  // ctx.state.isAuthenticated
  // ctx.state.user
  // でも認証チェックは可
  // ただし、今回特例的な「認証済みだがPublicロールを持つユーザー」が存在するので、
  // このような条件分岐にした
  if (ctx.state.user.role.name !== "Authenticated") {
    return false
  }

  return true // 認証済みなら通す
}
