"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const database_1 = __importDefault(require("./database"));
const user_1 = __importDefault(require("./models/user"));
const character_1 = __importDefault(require("./models/character"));
const book_1 = __importDefault(require("./models/book"));
const chapter_1 = __importDefault(require("./models/chapter"));
user_1.default.hasMany(book_1.default);
book_1.default.belongsTo(user_1.default);
book_1.default.hasMany(character_1.default);
character_1.default.belongsTo(book_1.default);
book_1.default.hasMany(chapter_1.default);
chapter_1.default.belongsTo(book_1.default);
database_1.default.sync().then(() => {
    app.listen(1280, () => console.log("db models are synced"));
});
