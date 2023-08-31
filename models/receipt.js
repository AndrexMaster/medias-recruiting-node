import Sequelize from 'sequelize'
import { sequelize } from '../db/sequelizeDefine.js';

export const Receipt = sequelize.define("receipt", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        number: {
            type: Sequelize.INTEGER,
        },
        date: {
            type: Sequelize.DATE,
            defaultValue: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        total: {
            type: Sequelize.DOUBLE(14, 2),
            defaultValue: null
        }
    },
    {
        timestamps: false,
    });