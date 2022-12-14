import dayjs from "dayjs";

export default {

    '1 * * * * *': async ({ strapi }) => {
        console.log("RUN CRON JOB")
        try {
            const products = await strapi.entityService.findMany(
                "api::product.product",
                {
                    filters: {
                        isSelling: {
                            $eq: true
                        }
                    }
                }
            );
            for (let i = 0; i < products.length; i++) {
                const product = products[i];
                const sellEndDate = dayjs(product.sellEndDate)
                if (sellEndDate.isBefore(dayjs())) {
                    await strapi.entityService.update(
                        "api::product.product",
                        product.id,
                        {
                            data: { isSelling: false },
                        }
                    );
                }
            }
        } catch (err) {
            console.log(err)
        }

    },
};