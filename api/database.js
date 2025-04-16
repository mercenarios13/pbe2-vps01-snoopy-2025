// database.js
import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "db.sqlite", // ou um caminho como './data/db.sqlite'
});

export default sequelize;
