const express = require("express");
const router = express.Router();

const {
  getCharById,
  login,
  postFav,
  deleteFav,
} = require("../controllers/index");


// // //GET getCharById: "/character/:id"
router.get("/character/:id", getCharById);

// // //GET login: "/login"
router.get("/login", login);

// // //POST postFav: "/fav"
router.post("/fav", postFav);

// // //DELETE deleteFav: "/fav/:id"
router.delete("/fav/:id", deleteFav);

module.exports = router
