import { Sequelize, DataTypes } from "sequelize";
import db from "../db/connection";
import Usuario from "./usuario";
import Publication from "./publication";

const Comment = db.define(
  "Comment",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    publicationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

Usuario.hasMany(Comment, { foreignKey: "userId" });
Comment.belongsTo(Usuario, { foreignKey: "userId" });

Publication.hasMany(Comment, { foreignKey: "publicationId" });
Comment.belongsTo(Publication, { foreignKey: "publicationId" });

export default Comment;
