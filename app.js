const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./config/database");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const employeeRouter = require("./routes/employee.routes");
const projectRouter = require("./routes/project.routes");

db.sequelize.sync();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// for parsing application
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

app.use("/employees", employeeRouter);
app.use("/projects", projectRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});