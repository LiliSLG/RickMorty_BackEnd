const { Favorite, User } = require("../DB_connection");

const getUserIdFavs = async (req, res) => {
  const { idUser } = req.query;
  try {
    if (idUser) {
      const favorites = await Favorite.findAll({
        //recupero favoritos de un solo usuario
        include: [{ model: User, where: { id: idUser } }],
      });
      return res.json(favorites);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getUserIdFavs;
