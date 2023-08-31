import { Receipt } from "../models/receipt.js";

export const getReceipts = async (req, res) => {
    try {
        const receipts = await Receipt.findAll()
        res.json(receipts)
    } catch (err) {
        res.status(400).json({
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
        let receipt = await Receipt.create({
            number: lastReceipt ? lastReceipt.number + 1 : 1,
        })
        res.json(receipt)

    } catch (err) {
        res.status(400).json({
            message: 'Something went wrong(',
            error: err
        })
    }
}

export const updateReceipt = async (req, res) => {
    try {
        await Receipt.update({ total: req.body.params.totalAmount }, {
            where: {
                id: req.body.params.receipt_id,
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