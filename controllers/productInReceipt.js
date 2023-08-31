import { ProductInReceipt } from "../models/productInReceipt.js";
import {Product} from "../models/product.js";

export const getReceiptProducts = async (req, res) => {
    try {
        const receiptProducts = await ProductInReceipt.findAll({
            include: [{
                model: Product,
                required: false,
            }],
            where: {
                receipt_id: req.query.receipt_id
            },
        })

        res.json(receiptProducts)
    } catch (err) {
        res.status(400).json({
            message: 'Something went wrong(',
            error: err
        })
    }
}

export const addProductInReceipt = async (req, res) => {
  try {
      const product = await Product.findByPk(req.body.params.product_id)
      await ProductInReceipt.create({
          receipt_id: req.body.params.receipt_id,
          product_id: req.body.params.product_id,
          quantity: req.body.params.quantity,
          price: product.price,
      })
      res.json({
          message: 'Product was added',
      })
  } catch (e) {
      res.status(400).json({
          message: "Something went wrong",
          error: e
      })
  }
}

export const deleteProductInReceipt = async (req, res) => {
  try {
      await ProductInReceipt.destroy({
          where: {
              id: req.query.productInReceiptId
          }
      })
      res.json({
          message: 'Product was deleted',
      })
  } catch (e) {
      res.status(400).json({
          message: "Something went wrong",
          error: e
      })
  }
}

export const updateProductInReceipt = async (req, res) => {
  try {
      await ProductInReceipt.update({ quantity: req.body.params.quantity }, {
          where: {
              id: req.body.params.productInReceiptId,
          }
      });
      res.json({
          message: 'Product was updated',
      })
  } catch (e) {
      res.status(400).json({
          message: "Something went wrong",
          error: e
      })
  }
}