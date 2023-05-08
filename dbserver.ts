import express from 'express';
const app = express();

app.use(express.json());

import sequelize from "./database";
import User from "./models/user";
import Character from "./models/character";
import Book from "./models/book";
import Chapter from './models/chapter';

User.hasMany(Book);
Book.belongsTo(User);
Book.hasMany(Character);
Character.belongsTo(Book);
Book.hasMany(Chapter);
Chapter.belongsTo(Book);

sequelize.sync().then(() => {
  app.listen(1280, () => console.log("db models are synced"));
});
