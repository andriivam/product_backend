import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import dbConnect from './database/dbConnection.mjs';
import getAllProducts from './controllers/getAllProducts.mjs';
import addNewProduct from './controllers/addNewProduct.mjs';
import deleteProducts from './controllers/deleteProducts.mjs';

dbConnect(); 
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors({origin: ['http://localhost:3000', 'http://localhost:3001']}));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   next();
// });

const PORT = process.env.PORT;

app.get('/', function (req, res) {
  res.send('Hello World')
})

// getting all products in our list
app.get('/products_list', getAllProducts);
// adding new product
app.post('/addProduct', addNewProduct);
// delete products
app.delete('/productsList', deleteProducts);



app.listen(process.env.PORT, () => console.log(`Server started: localhost ${PORT}`))

