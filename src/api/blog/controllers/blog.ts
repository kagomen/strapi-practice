import { factories } from "@strapi/strapi"
import { BlogWithWordCount } from "../services/blog"

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
    async findOne(ctx) {
      const { id: documentId } = ctx.params
      const { query } = ctx

      const entity: BlogWithWordCount | null = await strapi
        .service("api::blog.blog")
        .findOneWithWordCount({
          filters: { documentId },
          ...query,
        })

      return this.transformResponse!(entity)
    },

    async findBySlug(ctx) {
      const { slug } = ctx.params
      const { query } = ctx

      const entity: BlogWithWordCount | null = await strapi
        .service("api::blog.blog")
        .findOneWithWordCount({
          filters: { slug },
          ...query,
        })

      return this.transformResponse!(entity)
    },
  })
)
