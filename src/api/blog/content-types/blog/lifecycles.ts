const slugify = (str: string): string => {
  if (!str) {
    return ""
  }
  return str
    .toString()
    .trim() // 先頭と末尾の空白を削除
    .replace(/\s+/g, "-") // 連続する空白をハイフン1つに置換
    .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, "") // URLに使えない半角記号などを削除
}

export default {
  // DBに新規データが追加される直前
  beforeCreate(event) {
    const { data } = event.params
    if (data.title) {
      data.slug = slugify(data.title)
    }
  },
  // DBの既存データが上書きされる直前
  beforeUpdate(event) {
    const { data } = event.params
    if (data.title) {
      data.slug = slugify(data.title)
    }
  },
}
