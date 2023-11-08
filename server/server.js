const express = require("express");
const cors = require("cors");
const connectDb = require("./config/database.js");
const usersController = require("./controllers/usersController.js");
const adminController = require("./controllers/adminController.js");

const DB = require("./common/constants/dataBase.js");

connectDb();
const server = express();

server.use(cors());
server.use(express.json());

server.use("/users", usersController);
server.use("/admins", adminController);

server.listen(DB.PORT, () => {
  console.log(`Server is running on port ${DB.PORT}`);
});
