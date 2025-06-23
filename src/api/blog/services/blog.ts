import { factories } from "@strapi/strapi"

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
  async findOneWithWordCount(params: object) {
    const entry = await strapi.documents("api::blog.blog").findFirst(params)

    if (!entry) {
      return entry
    }

    const content = entry.content || ""
    const wordCount = getWordCount(content)
    return { ...entry, wordCount }
  },
}))
