import Sequelize from 'sequelize'
import { sequelize } from '../db/sequelizeDefine.js';

export const Product = sequelize.define("product", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.DOUBLE(7, 2)
    }
},
{
    timestamps: false
});