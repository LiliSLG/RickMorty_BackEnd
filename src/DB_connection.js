require("dotenv").config();

const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/User");

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    dialectOptions: {
      ssl: {
        require: true, //habilitar certificado de seguridad
        rejectUnauthorized: false, //para evitar errores de certificado
      },
    },
    logging: false,
    native: false,
  }
);

// servidor local
// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
//   { logging: false, native: false }
// );

// Para probar la conexion a la BDD:
sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado a:", `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`);
  })
  .catch((error) => {
    console.log("Fallo: ", error.message);
  });

FavoriteModel(sequelize);
UserModel(sequelize);

// RELATIONS
const { User, Favorite } = sequelize.models;

//crea tabla intermedia muchos a muchos
User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = {
  User,
  Favorite,
  conn: sequelize,
};
