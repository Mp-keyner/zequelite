import { Sequelize, DataTypes } from "sequelize";
import db from "../db/connection";
import Usuario from "./usuario";

const Publication = db.define(
  "Publication",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    publication: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    answers: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    theme: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

Usuario.hasMany(Publication, { foreignKey: "userId" });
Publication.belongsTo(Usuario, { foreignKey: "userId" });

export default Publication;
