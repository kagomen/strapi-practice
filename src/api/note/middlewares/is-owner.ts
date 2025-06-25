/**
 * is-owner middleware
 * Restricts access to a resource unless the authenticated user is its owner
 */

import { Core } from "@strapi/strapi"

export default (config: any, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx: any, next: any) => {
    const userId = ctx.state.user?.id
    const documentId = ctx.params.id ? ctx.params.id : undefined

    if (!userId) {
      return ctx.unauthorized("認証が必要です")
    }

    if (!documentId) {
      return ctx.badRequest("Noteを指定してください")
    }

    const note = await strapi
      .documents("api::note.note")
      .findOne({ documentId, populate: "*" })

    if (!note) {
      return ctx.notFound("Noteが存在しません")
    }

    if (userId !== note.user?.id) {
      return ctx.forbidden("作成者以外のNoteを閲覧することはできません")
    }

    return next()
  }
}
