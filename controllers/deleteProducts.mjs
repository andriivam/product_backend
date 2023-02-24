import client from '../database/client.mjs';

const deleteProducts = async (req, res) => {
    try {
        let { id }  = req.body;
        console.log(id, "ids");
        if (!Array.isArray(id)) {
            return res.status(400).json({ error: 'Invalid request: id parameter must be an array' });
        }
        await client.query(`DELETE FROM products WHERE id IN (${id.join()})`)
        res.status(200).send({ info: 'Product deleted' })
    } catch (error) {
        console.log(error);
    }
};



export default deleteProducts;