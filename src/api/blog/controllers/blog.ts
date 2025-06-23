import { factories } from "@strapi/strapi"

/**
 * Strapiのコアコントローラーを生成し、カスタムメソッドで拡張するためのファクトリ関数
 *
 * @param {string} uid 対象となるコンテンツタイプのユニークID（例: api::blog.blog）
 * @param {object} strapi Strapiのグローバルインスタンス。他のAPIやサービスにアクセスする際に使用する
 * @param {function({ strapi: object }): object} callback コントローラーを拡張するためのコールバック関数
 * @returns デフォルトの機能とカスタム機能がマージされた、最終的なコントローラーオブジェクト
 */
export default factories.createCoreController(
  "api::blog.blog",
  ({ strapi }) => ({
    // findOne()をオーバーライド
    async findOne(ctx) {
      // 元のfindOne()を呼び出して基本的なデータを取得
      const response = await super.findOne(ctx)

      // レスポンスデータが存在する場合のみ、追加の処理を行う
      if (response.data) {
        const content = response.data.content || ""
        const wordCount = content.length
        response.data.wordCount = wordCount
      }

      return response
    },

    // find()をオーバーライド
    async find(ctx) {
      const response = await super.find(ctx)

      if (response.data && Array.isArray(response.data)) {
        response.data.forEach((entry) => {
          const content = entry.content || ""
          entry.wordCount = content.length
        })
      }

      return response
    },
  })
)
