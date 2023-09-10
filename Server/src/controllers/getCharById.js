const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(URL + id);
    const { name, gender, species, origin, image, status } = data;
    name
      ? res
          .status(200)
          .json({ id, name, gender, species, origin, image, status })
      : res.status(404).send("Not found");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCharById };

//version con promesas
// const getCharById = (req, res) => {
//   const { id } = req.params;
//   axios
//     .get(URL + id)
//     .then((response) => {
//       const { id, name, gender, species, origin, image, status } =
//         response.data;
//       res.json({ id, name, gender, species, origin, image, status });
//     })
//     .catch((error) => {
//       console.log(error.response.data);
//       if (error.response.status === 404) res.status(404).send("Not found");
//       else res.status(500).send({ message: error.message }); //error.response.data.error });
//     });
// };

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
