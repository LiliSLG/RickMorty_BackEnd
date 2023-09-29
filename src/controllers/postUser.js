const { User } = require("../DB_connection");
const postUser = async (req, res) => {
  try {
    const fullName = req.query.fullName;
    const email = req.query.email;
    const password = req.query.password;
    // const { fullName, email, password } = req.query;
    if (!fullName || !email || !password)
      return res.status(400).json("Faltan datos");
    const user = await User.findOrCreate({
      where: { fullName, email, password },
    });
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;
