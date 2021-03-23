const express = require("express");
const db = require("./config/database");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const employeeRouter = require("./routes/employee.routes");
const projectRouter = require("./routes/project.routes");

db.sequelize.sync();




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

app.use("/employee", employeeRouter);
app.use("/project", projectRouter);

const PORT = 3000;
http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});