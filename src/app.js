const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("../src/routes/index");
const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));
server.use((req, res, next) => {
  // lo comento para poder hacer el deploy
  // res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header("Access-Control-Allow-Origin", "*"); //cualquiera le hace peticiones
  // res.header('Access-Control-Allow-Origin', 'https://rick-morty-front-end.vercel.app');//Autorizo recibir solicitudes de este dominio
  res.header("Access-Control-Allow-Credentials", true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); //Autorizo recibir solicitudes con dichos hedears
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE"); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
  next();
});

server.use("/rickandmorty", router);

module.exports = server;

//SERVIDOR ANTES DE EXPRESS
// const http = require("http");
// const getCharById = require("./controllers/getCharById");
// // const data = require("./utils/data");

// const PORT = 3001;

// // module.exports =
// http
//   .createServer(function (req, res) {
//     // console.log(req.url);
//     // console.log(`Server raised in port ${PORT}`);
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     try {
//       const { url } = req;
//       if (url.includes("/rickandmorty/character")) {
//         // const id = url.split("/").pop();
//         const id = url.split("/").at(-1);
//         getCharById(res, id);
//         // const character = data.find((char) => char.id == id);
//         // const character = data.find((char) => char.id === +id);
//         // // console.log('character', character);
//         // if (character) {
//         //   res.writeHead(200, { "Content-Type": "application/json" });
//         //   res.end(JSON.stringify(character));
//         // } else {
//         //   res.writeHead(404, { "Content-Type": "text/html" });
//         //   res.end("json not found");
//         // }
//       }
//     } catch (error) {
//       throw new Error(error);
//     }
//   })
//   .listen(PORT, "localhost");
