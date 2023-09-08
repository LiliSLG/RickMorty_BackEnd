let myFavorites = [];

const postFav = (req, res) => {
  // tendria que pasar {character: character} para hacer asi:
  const { character } = req.body;
  myFavorites.push(character);
  // myFavorites.push(req.body);
  res.status(201).json(myFavorites);
};



const deleteFav = (req, res) => {
  const { id } = req.params;
  myFavorites = myFavorites.filter((favorite) => {
    favorite.id !== +id;
  });
  res.status(200).json(myFavorites);
};



module.exports = { postFav, deleteFav };
