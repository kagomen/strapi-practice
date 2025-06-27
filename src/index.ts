import type { Core } from "@strapi/strapi"

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   *
   * アプリケーションを初期化する前に実行される非同期レジスタ関数。
   * アプリケーションが初期化される前に実行されます。
   *
   * これはコードを拡張する機会を与えます。
   */
  register({ strapi }: { strapi: Core.Strapi }) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   *
   * アプリケーションが起動する前に実行される非同期ブートストラップ関数。
   * 非同期のブートストラップ関数です。
   *
   * これはデータ・モデルをセットアップする機会を与えます、
   * ジョブを実行したり、特別なロジックを実行する機会を与えます。
   */
  // bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // const actions = [
    //   // hello API
    //   "api::hello.controllers.hello.protected",
    //   // note API
    //   "api::note.controllers.note.find", // GET /api/notes
    //   "api::note.controllers.note.findOne", // GET /api/notes/:id
    //   "api::note.controllers.note.create", // POST /api/notes
    //   "api::note.controllers.note.update", // PUT /api/notes/:id
    //   "api::note.controllers.note.delete", // DELETE /api/notes/:id
    // ]
    // // authorizedロールこのロールに既に関連付けられている権限データも一緒に取得
    // const authorizedRole = await strapi
    //   .documents("plugin::users-permissions.role")
    //   .findFirst({
    //     filters: { type: "authorized" },
    //     populate: ["permissions"],
    //   })
    // // 予期せぬエラー
    // if (!authorizedRole) {
    //   strapi.log.warn('Could not find the "authorized" role.')
    //   return // ログを出してregister()を終える
    // }
    // // authorizedRoleに紐づく既存の権限データから、アクション名だけを抜き出して配列を作成
    // const existingActions = (authorizedRole.permissions ?? []).map(
    //   (p) => p.action
    // )
    // // 未登録のアクションを抽出
    // const unregisteredActions = actions.filter(
    //   (action) => !existingActions.includes(action)
    // )
    // // 未登録のアクションが無ければ処理を終了
    // if (unregisteredActions.length === 0) {
    //   return // register()を終える
    // }
    // // 未登録アクションを元にpermissionsにレコードを作成
    // // 注: permissions.actionはuniqueではなく、ロールごとに作成される
    // const newPermissions = await Promise.all(
    //   unregisteredActions.map(
    //     async (action) =>
    //       await strapi
    //         .documents("plugin::users-permissions.permission")
    //         .create({ data: { action } })
    //   )
    // )
    // // authorizedロールが持つべき全ての権限のIDリストを作成
    // const allPermissionIds = [
    //   ...(authorizedRole.permissions ?? []).map((p) => p.id),
    //   ...newPermissions.map((p) => p.id),
    // ]
    // // 中間テーブルに対し、role_id(authorizedRole.documentId), permission_id(allPermissionIdsの各ID)で、
    // // 既存の関連付けを一旦クリアした上で新しいレコードを複数作成する
    // // →GUI設定よりコードが優先される。actionsに認証を設定すること
    // await strapi.documents("plugin::users-permissions.role").update({
    //   documentId: authorizedRole.documentId,
    //   data: {
    //     permissions: allPermissionIds,
    //   },
    // })
  },
}
