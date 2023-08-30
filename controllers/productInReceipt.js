import { ProductInReceipt } from "../models/productInReceipt.js";
import {Product} from "../models/product.js";

export const addProductInReceipt = async (req, res) => {
  try {
      const product = await Product.findByPk(req.body.product_id)
      await ProductInReceipt.create({
          receipt_id: req.body.receipt_id,
          product_id: req.body.product_id,
          quantity: req.body.quantity,
          price: product.price,
      })
      res.json({
          message: 'Product was added',
      })
  } catch (e) {
      res.json({
          message: "Something went wrong",
          error: e
      })
  }
}
export const deleteProductInReceipt = async (req, res) => {
  try {
      await ProductInReceipt.destroy({
          where: {
              id: req.body.productInReceiptId
          }
      })
      res.json({
          message: 'Product was deleted',
      })
  } catch (e) {
      res.json({
          message: "Something went wrong",
          error: e
      })
  }
}

export const updateProductInReceipt = async (req, res) => {
  try {
      await ProductInReceipt.update({ quantity: req.body.quantity }, {
          where: {
              id: req.body.productInReceiptId,
          }
      });
      res.json({
          message: 'Product was updated',
      })
  } catch (e) {
      res.json({
          message: "Something went wrong",
          error: e
      })
  }
}