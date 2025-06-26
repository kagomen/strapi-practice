import { factories } from "@strapi/strapi"

// デフォルトのCRUD操作にはない、独自のURLパスやエンドポイントを作成したいときにカスタムルーターを使用する
// 今回はデフォルトCRUD操作をカスタムするだけなので、カスタムルーターを作成する必要はなく、
// コアルーターを編集するだけとする
export default factories.createCoreRouter("api::note.note", {
  config: {
    update: {
      middlewares: ["api::note.is-owner"],
    },
    delete: {
      middlewares: ["api::note.is-owner"],
    },
    findOne: {
      middlewares: ["api::note.is-owner"],
    },
  },
})
