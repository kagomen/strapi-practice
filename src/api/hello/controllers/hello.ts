/**
 * A set of functions called "actions" for `hello`
 */

export default {
  async protected(ctx: any) {
    ctx.body = { message: "Hello, authenticated user!" }
  },
}

// @see https://strapi.io/blog/how-to-create-a-custom-api-endpoint-in-strapi
