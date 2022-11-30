export default {
  routes: [
    {
      method: "POST",
      path: "/products/:id/like",
      handler: "product.like",
    },
    {
      method: "GET",
      path: "/products/:id/like",
      handler: "product.getLike",
    },
  ],
};
