import * as fs from "fs";
import Sequelize from "sequelize";
const configData = fs.readFileSync('./config/config.json', 'utf8');
const config = JSON.parse(configData);

export const sequelize = new Sequelize (
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host: config.development.host,
        dialect: config.development.dialect,
    }
);