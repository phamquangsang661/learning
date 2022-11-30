/**
 * product controller
 */

import { factories } from "@strapi/strapi";
import { isNumeric } from "../../../utils/utils";

export default factories.createCoreController(
  "api::product.product",
  ({ strapi }) => ({
    async like(ctx) {
      try {
        let id = ctx.params.id;
        console.log("ID in like " + id);
        if (!id || id == undefined || !isNumeric(id)) {
          console.log("ID error");
          throw new Error("Id must be number");
        }

        id = parseInt(id);
        console.log(ctx.state);
        if (!ctx.state.user || !ctx.state.user?.id) {
          throw new Error("Must be login to like");
        }

        const userId = ctx.state.user.id;

        const user = await strapi.entityService.findOne(
          "plugin::users-permissions.user",
          userId,
          {
            populate: { product_likes: true },
          }
        );
        let productLikes: number[] = user.product_likes.map((item) => item.id);

        if (productLikes.includes(id)) {
          productLikes.splice(productLikes.indexOf(id), 1);
        } else {
          productLikes.push(id);
        }

        await strapi.entityService.update(
          "plugin::users-permissions.user",
          userId,
          {
            data: { product_likes: productLikes },
          }
        );

        return {
          message: "success",
        };
      } catch (err) {
        console.log(err);
        ctx.body = err;
        throw err;
      }
    },
    async getLike(ctx) {
      try {
        let id = ctx.params.id;

        if (!id || id == undefined || !isNumeric(id)) {
          console.log("ID error");
          throw new Error("Id must be number");
        }

        id = parseInt(id);
        const userLikeProduct = await strapi.entityService.findMany(
          "plugin::users-permissions.user",
          {
            filters: {
              product_likes: {
                id: id,
              },
            },
          }
        );

        let isLiked = false;
        if (ctx.state.user && ctx.state.user.id) {
          userLikeProduct.forEach((f) => {
            if (f.id == ctx.state.user.id) isLiked = true;
          });
        }
        return {
          content: {
            likes: userLikeProduct.length,
            isLiked,
          },
        };
      } catch (err) {
        console.log(err);
        ctx.body = err;
        throw err;
      }
    },
  })
);
