// const { conn, User } = require("./DB_connection");
const { conn } = require("./DB_connection");
const { PORT } = process.env;
const server = require("./app");

// const PORT = 3001;

conn
  .sync({ force: true }) //{ alter: true }
  .then(() => {
    server.listen(PORT, () => {
      console.log("Server raised in port: " + PORT);
    });
  })
  //AGREGO UN USER DE PRUEVA. LO COMENTO PORQUE SAQUE { force: true }
  // .then(async () => {
  //   try {
  //     const newUser = await User.create({
  //       email: "ejemplo@gmail.com",
  //       password: "1Password",
  //     });
  //   } catch (error) {
  //     console.log("Error creando usuario", error);
  //   }
  // })
  .catch((err) => {
    console.log(err);
  });
