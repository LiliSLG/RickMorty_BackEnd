const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;
  const { idUser } = req.query;
  try {
    // const favoriteToDelete = await favoriteToDelete.findOne({where: {id}})
    const favoriteToDelete = await Favorite.findByPk(id);
    if (!favoriteToDelete) 
      throw Error("No se encontro ningun personaje con ese id");
    await favoriteToDelete.removeUser(idUser);
    await favoriteToDelete.destroy({
      where: { id },
    });
    // const allFavorites = await Favorite.findAll();
    // return res.json(allFavorites);
    return res.json(id);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteFav;
