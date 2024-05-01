import { Sequelize, DataTypes } from "sequelize";
const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 6033,
  username: "root",
  password: "root",
  database: "test",
});

module.exports = sequelize;
