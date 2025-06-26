export default {
  routes: [
    {
      method: "GET",
      path: "/hello/protected",
      handler: "hello.protected",
      config: {
        policies: ["global::is-authenticated"],
        middlewares: [],
      },
    },
  ],
}
