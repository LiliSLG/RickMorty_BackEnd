const users = require("../utils/users"); //arreglo

const login = (req, res) => {
  const { email, password } = req.query;
  const user = users.some(user => user.email === email && user.password === password)
  user ? res.json({access: true}) : res.json({access: false})
  //find encuentra el primero que matchea
  // const user = users.find(
  //   (user) => (user.email === email && user.password === password)
  // );
  // if (user) res.status(200).json({ access: true });
  // else res.status(200).json({ access: false });
};

module.exports = { login };