const { User } = require("../DB_connection");
const login = async (req, res) => {
  try {
    const { email, password } = req.query; //no es lo mejor, porque queda expuesta. Deberia ir por body
    if (!email || !password) return res.status(400).json("Faltan datos");
    const user = await User.findOne({
      where: { email },
    });
    if (!user) return res.status(404).json("Usuario no encontrado");
    // res.status(200).json({ access: true });
    user.password === password
      ? res.json({ access: true, id: user.id })
      : res.status(403).json("Contraseña incorrecta");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = login;
