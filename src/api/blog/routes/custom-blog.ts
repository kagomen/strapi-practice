// カスタムルートはデフォルトルートより優先される
export default {
  routes: [
    {
      method: "GET",
      path: "/blogs/slug/:slug([a-z0-9-]+)",
      handler: "blog.findBySlug",
    },
  ],
}
