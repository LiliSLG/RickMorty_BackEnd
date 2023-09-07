const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const { id } = req.params;
  debugger;
  axios
    .get(URL + id)
    .then((response) => {
      const { id, name, gender, species, origin, image, status } =
        response.data;
      res.json({ id, name, gender, species, origin, image, status });
    })
    .catch((error) => {
      console.log(error)
      if (error.response.status === 404) res.status(404).send("Not found");
      else res.status(500).send({ message: reason.message });
    });
};
module.exports = { getCharById };

//version con el mismo codigo que tenia antes
// const getCharById = (req, res) => {
//   const { id } = req.params;
//   axios
//     .get(URL + id)
//     .then((response) => {
//       try {
//         const { id, name, gender, species, origin, image, status } =
//           response.data;
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(
//           JSON.stringify({ id, name, gender, species, origin, image, status })
//         );
//       } catch (error) {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.end("Not found");
//       }
//     })

//     .catch(() => {
//       res.writeHead(500, { "Content-Type": "text/plain" }); //500 error de parte del servidor
//       res.end(reason.message);
//     });
// };

//getCharById(null, 15555) --> Ejecutar desde la terminal node ./getCharById
