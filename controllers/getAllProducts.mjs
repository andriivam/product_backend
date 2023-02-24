import client from '../database/client.mjs';

//Get all cuisine types
 const getAllProducts = async (req, res) => {
    try {
        let result = await client.query(`SELECT products.*, product_values.*
        FROM products
        JOIN product_values ON products.id = product_values.product_id`);
        res.status(200).json(result.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ error: "Error: something went wrong" })
    }
}

export default getAllProducts;