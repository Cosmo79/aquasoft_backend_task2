
const Sequelize = require("sequelize");
const sequelize = new Sequelize("task2", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employee = require("../models/employee")(sequelize, Sequelize);
db.project = require("../models/project")(sequelize, Sequelize);


module.exports = db;