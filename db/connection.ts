import { Sequelize } from "sequelize";

const db = new Sequelize("node", "root", "Keyner1105Ko", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export default db;
