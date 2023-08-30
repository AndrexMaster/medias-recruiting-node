import {Product} from "../models/product.js";
import {Receipt} from "../models/receipt.js";

export const getReceipts = async (req, res) => {
    try {
        const receipt = await Receipt.findAll()
        res.json({
            receipt: receipt,
        })
    } catch (err) {
        res.json({
            message: 'Something went wrong(',
            error: err
        })
    }
}

export const addReceipt = async (req, res) => {
    try {
        const lastReceipt = (await Receipt.findAll({
            order: [
                ['id', 'DESC']
            ]
        })).shift()
        await Receipt.create({
            number: lastReceipt ? lastReceipt.number + 1 : 0,
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