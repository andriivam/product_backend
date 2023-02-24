import client from "../database/client.mjs";

// adding new product to the list
// const addNewProduct = async (req, res) => {
//     try {
//         const {sku, name, price, size, weight, height, width, length} = req.body;
//         console.log(req.body)
//         const productInfo = `WITH inserted_product AS (
//             INSERT INTO products(sku, name, price)
//             VALUES ($1, $2, $3)
//             RETURNING id
//           ), inserted_product_values AS (
//             INSERT INTO product_values(id, size, weight, height, width, length, product_id)
//             SELECT $4, $5, $6, $7, $8,, $9 inserted_product.id
//             FROM inserted_product
//             RETURNING id
//           )
//           SELECT *
//           FROM inserted_product, inserted_product_values;'`
//         await client.query(productInfo, [sku, name, price, size, weight, height, width, length])
//         return res.send({ info: `${req.body}` })
//     } catch (error) {
//         console.error(error.message)
//         return res.status(500).send({ error: "internal server error" })
//     }
// }

const addNewProduct = async (req, res) => {
    try {
        const { sku, name, price, size, weight, height, width, length } = req.body;
        console.log(req.body);
        const productInfo = `WITH inserted_product AS (
            INSERT INTO products(sku, name, price)
            VALUES ($1, $2, $3)
            RETURNING id
            ), inserted_product_values AS (
            INSERT INTO product_values(size, weight, height, width, length, product_id)
            VALUES ($4, $5, $6, $7, $8, (SELECT id FROM inserted_product))
            RETURNING id
            )
          SELECT *
        FROM inserted_product, inserted_product_values;`;
        await client.query(productInfo, [
            sku,
            name,
            price,
            size,
            weight,
            height,
            width,
            length,
        ]);
        return res.send({ info: `${req.body}` });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send({ error: "internal server error" });
    }
};

export default addNewProduct;
