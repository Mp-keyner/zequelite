import { Sequelize } from "sequelize";

const db = new Sequelize("node", "root", "Keyner1105KO", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export default db;
