const express = require("express");
const db = require("./config/database");
const employeeRouter = require("./routes/employee.routes");
const projectRouter = require("./routes/project.routes");

db.sequelize.sync();
const app = express();


// for parsing application
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/employee", employeeRouter);
app.use("/project", projectRouter);



const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});