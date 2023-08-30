import express from 'express';
import cors from "cors";

// Controllers
import { getProducts, addProduct } from "./controllers/product.js";
import { addReceipt, getReceipts } from "./controllers/receipt.js";
import { addProductInReceipt, deleteProductInReceipt, updateProductInReceipt } from "./controllers/productInReceipt.js";

// App
const app = express();
app.use(express.json())
app.use(cors())

// Products
app.route('/products')
    .get(getProducts)
    .post(addProduct);

// Receipt
app.route('/receipts')
    .get(getReceipts)
    .post(addReceipt);

// Product In Receipt
app.route('/product-in-receipt')
    .post(addProductInReceipt)
    .delete(deleteProductInReceipt)
    .put(updateProductInReceipt);

export default app