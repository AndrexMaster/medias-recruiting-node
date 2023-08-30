import Sequelize from 'sequelize'
import { sequelize } from '../db/sequelizeDefine.js';

export const ProductInReceipt = sequelize.define("productInReceipt", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    receipt_id: {
        type: Sequelize.INTEGER,
    },
    product_id: {
        type: Sequelize.INTEGER,
    },
    quantity: {
        type: Sequelize.INTEGER,
    },
    price: {
        type: Sequelize.DOUBLE(7, 2),
    },
},
{
    tableName: 'productsInReceipts',
    timestamps: false
});
