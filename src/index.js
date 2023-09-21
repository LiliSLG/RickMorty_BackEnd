require("dotenv").config();
const { conn } = require("./DB_connection");
const { PORT } = process.env;
const server = require("./app");

// const PORT = 3001;

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log("Server raised in port: " + PORT);
  });
});
