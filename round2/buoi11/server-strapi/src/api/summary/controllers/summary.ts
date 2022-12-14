import { factories } from "@strapi/strapi";
import dayjs from "dayjs";
export default ({ strapi }) => ({
  async topSeller(ctx) {
    try {
      const startDate = dayjs().startOf('month').toISOString()
      const endDate = dayjs().endOf('month').toISOString()
      const products = await strapi.entityService.findMany(
        "api::product.product",
        {
          filters: {
            soldAt: {
              $gte: startDate,
              $lte: endDate
            }
          },
          populate: {
            owner: true
          },
        }
      );

      const seller: { [key: string]: any } = {}

      products.forEach((f) => {
        const id = f.owner.id
        const user = f.owner
        if (seller[id]) {
          delete f.owner
          seller[id].products.push(f)
          seller[id].total = seller[id].total + f.price
        } else {
          seller[id] = {
            user,
            products: [],
            totalSell: 0
          }
          delete f.owner
          seller[id].products.push(f)
          seller[id].total = f.price
        }
      })
      const sellerArray = [];
      Object.keys(seller).forEach(key => {
        const user = seller[key];
        sellerArray.push(user)
      })
      sellerArray.sort((a, b) => {
        return b.total - a.total
      })

      return {
        content: {
          sellerArray
        }
      };
    } catch (err) {
      console.log(err);
      ctx.body = err;
      throw err;
    }
  },

})
