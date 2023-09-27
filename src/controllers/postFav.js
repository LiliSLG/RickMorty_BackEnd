const { Favorite } = require("../DB_connection");
const postFav = async (req, res) => {
  const { idUser } = req.query;
  const { id, name, origin, status, image, species, gender } =
    req.body.character;
  // if (!id || !name || !origin || !status || !image || !species || !gender) {
  if (![id, name, origin, status, image, species, gender].every(Boolean))
    return res.status(401).json("Faltan datos");
  try {
    const [favoriteToAdd, created] = await Favorite.findOrCreate({
      where: { id, name, origin, status, image, species, gender },
    });
    favoriteToAdd.addUser(idUser);
    // const allFavorites = await Favorite.findAll({//saco esto para no devolver bajar el trafico
    //   include: [{ model: User, where: { id: idUser } }],}); //recupero favoritos de un solo usuario
    // return res.json(allFavorites); 
    return res.json(req.body.character); //devuelvo solo el favorito y el reducer lo agrega al estado myFavorites
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
