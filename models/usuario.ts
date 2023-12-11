import { Sequelize, DataTypes } from "sequelize";
import db from "../db/connection";

const Usuario = db.define(
  "Usuario",
  {
    id: {
      type: DataTypes.INTEGER,  
      primaryKey: true,
      autoIncrement: true, 
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.ENUM('Psicologo', 'Anonimo'),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default Usuario;
