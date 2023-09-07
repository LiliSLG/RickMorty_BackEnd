const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (res, id) => {
  //   axios.get(URL + id).then((res)=>console.log(res.data), (reason)=>console.log(reason.response.data));
  axios
    .get(URL + id)
    .then((response) => {
      const { id, name, gender, species, origin, image, status } = response.data;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ id, name, gender, species, origin, image, status })
      );
    })
    .catch(() => {
      res.writeHead(500, { "Content-Type": "text/plain" }); //500 error de parte del servidor
      res.end(reason.message);
    });
};

//getCharById(null, 15555) --> Ejecutar desde la terminal node ./getCharById
module.exports = getCharById;
