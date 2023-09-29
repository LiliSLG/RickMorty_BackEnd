const { conn, User } = require("./DB_connection");
// const { conn } = require("./DB_connection");
const { PORT } = process.env;
const server = require("./app");

// const PORT = 3001;

// force:true - ELIMINA TODAS LAS TABLAS DE LA BDD, Y LAS VUELVE A CREAR EN BASE A LOS MODELOS
// alter:true - ACTUALIZA LAS TABLAS DE BDD EN BASE A LOS MODELOS
conn
  .sync({ force: true }) //{ alter: true }
  .then(() => {
    server.listen(PORT, () => {
      console.log("Server raised in port: " + PORT);
    });
  })
  //AGREGO UN USER DE PRUEBA. LO COMENTO PORQUE SAQUE { force: true }
  .then(async () => {
    try {
      const newUser = await User.create({
        fullName: "Juan Perez",
        email: "ejemplo@gmail.com",
        password: "1Password",
      });
      console.log("Se creo el usuario: ejemplo@gmail.com");
      // const otroUser = await User.create({
      //   fullName: "Otro user"
      //   email: "polo@gmail.com",
      //   password: "1Password",
      // });
      // console.log("Se creo el usuario: polo@gmail.com");
    } catch (error) {
      console.log("Error creando usuario", error);
    }
  })
  .catch((err) => {
    console.log(err);
  });
