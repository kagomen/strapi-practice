import type { Data } from "@strapi/strapi"
import { factories } from "@strapi/strapi"

type Blog = Data.ContentType<"api::blog.blog">
export type BlogWithWordCount = Blog & { wordCount: number }

const getWordCount = (content: string): number => {
  if (!content) {
    return 0
  }

  return content.length
}

export default factories.createCoreService("api::blog.blog", ({ strapi }) => ({
  // findOne()をオーバーライド
  // 今回はfindOneWithWordCount()で一括で処理を担うため、必要ない
  // async findOne(id: string, params: object) {
  //   const result = await super.findOne(id, params)

  //   if (!result) {
  //     return null
  //   }

  //   const content = result.content || ""
  //   const wordCount = getWordCount(content)

  //   return { ...result, wordCount }
  // },

  // slugにも対応したfindOne()拡張メソッド
  async findOneWithWordCount(
    params: object
  ): Promise<BlogWithWordCount | null> {
    const entry = await strapi.documents("api::blog.blog").findFirst(params)

    if (!entry) {
      return null
    }

    const test = strapi.service("api::blog.blog")
    test.findOneWithWordCount

    const content = entry.content || ""
    const wordCount = getWordCount(content)

    return { ...entry, wordCount }
  },
}))
