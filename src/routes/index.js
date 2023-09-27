const express = require("express");
const {
  getCharById,
  login,
  postFav,
  deleteFav,
  postUser,
  getUserIdFavs
} = require("../controllers/index");

const router = express.Router();

//characters
router.get("/character/:id", getCharById);
router.get("/detail/:id", getCharById);

//favoritos
router.post("/fav", postFav);
router.get("/fav", getUserIdFavs);
router.delete("/fav/:id", deleteFav);

//usuarios
router.get("/login", login);
router.post("/login", postUser);

module.exports = router;
