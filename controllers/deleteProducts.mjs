import client from '../database/client.mjs';

const deleteProducts = async (req, res) => {
    try {
        let { id } = req.body;
        console.log(id, "id");
        // if (!Array.isArray(id)) {
        //     return res.status(400).json({ error: 'Invalid request: id parameter must be an array' });
        // }
        const query = {
            text: 'DELETE FROM products WHERE id = ANY($1)',
            values: [id],
        };
        const result = await client.query(query);
        res.status(200).send({ info: 'Product deleted' })
        return result.rowCount  
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Server error' });
    }
};



export default deleteProducts;