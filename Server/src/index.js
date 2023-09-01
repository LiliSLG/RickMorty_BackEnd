const http = require("http");
const getCharById = require("./controllers/getCharById");
// const data = require("./utils/data");

const PORT = 3001;

// module.exports =
http
  .createServer(function (req, res) {
    // console.log(req.url);
    // console.log(`Server raised in port ${PORT}`);
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
      const { url } = req;
      if (url.includes("/rickandmorty/character")) {
        // const id = url.split("/").pop();
        const id = url.split("/").at(-1);
        getCharById(res, id);
        // const character = data.find((char) => char.id == id);
        // const character = data.find((char) => char.id === +id);
        // // console.log('character', character);
        // if (character) {
        //   res.writeHead(200, { "Content-Type": "application/json" });
        //   res.end(JSON.stringify(character));
        // } else {
        //   res.writeHead(404, { "Content-Type": "text/html" });
        //   res.end("json not found");
        // }
      }
    } catch (error) {
      throw new Error(error);
    }
  })
  .listen(PORT, "localhost");