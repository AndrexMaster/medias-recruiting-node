import { Product } from "../models/product.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll()
        res.json(products)
    } catch (err) {
        res.json({
            message: 'Something went wrong(',
            error: err
        })
    }
}

export const addProduct = async (req, res) => {
    try {
        await Product.create({
            name: req.body.name,
            price: req.body.price
        })
        res.json({
            message: 'Product was added',
        })

    } catch (err) {
        res.json({
            message: 'Something went wrong(',
            error: err
        })
    }
}