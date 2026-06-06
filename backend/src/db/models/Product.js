import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";

export const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
      },
    },
    status: {
      type: DataTypes.ENUM("out_of_stock", "low_stock", "in_stock"),
      allowNull: false,
      defaultValue: "in_stock",
    },
  },
  {
    timestamps: true,
    tableName: "products",
  },
);
