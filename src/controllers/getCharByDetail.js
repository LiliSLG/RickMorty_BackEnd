const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharByDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(URL + id);
    const { name, gender, specie, origin, image, status, location } = data;
    res
      .status(200)
      .json({ id, name, gender, specie, origin, image, status, location });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.export = getCharByDetail;
