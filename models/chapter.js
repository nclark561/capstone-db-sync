"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const sequelize_1 = require("sequelize");
const Chapter = database_1.default.define('character', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    num: sequelize_1.DataTypes.INTEGER,
    name: {
        type: sequelize_1.DataTypes.STRING,
        autoIncrement: false,
        allowNull: true,
        primaryKey: false
    },
    outline: sequelize_1.DataTypes.TEXT
});
exports.default = Chapter;
